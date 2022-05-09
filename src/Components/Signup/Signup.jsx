import { useState} from "react";
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Container, P1} from "../Style/Container"


function Signup(){
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL||'https://mywallet-backand.herokuapp.com/';
    console.log("url: ",URL);
    const [data, setData] = useState({
        email:'',
        password:'',
        name:''
    });
    const [disable, setDisable] = useState(false);

    function postData(e){
        e.preventDefault();
        setDisable(true);
        const promise = axios.post(`${URL}sign-up`, data);
        promise.then(res => {
            console.log(res.data);
            navigate('/');
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={postData}>
                <input type="text" value={data.name} disabled = {disable? true:false} placeholder="Nome" onChange={e => setData({...data ,name :e.target.value})} required/>
                <input type="email" value={data.email} disabled = {disable? true:false} placeholder="E-mail" onChange={e => setData({...data ,email :e.target.value})} required/>
                <input type="password" value={data.password} disabled = {disable? true:false} placeholder="Senha" onChange={e => setData({...data ,password :e.target.value})} required/>
                {(data.password && data.password.length<8)&& <P1>A senha deve ter no mínimo 8 caracteres</P1>}
                <input type="password" value={data.confirmPassword} disabled = {disable? true:false} placeholder="Confirmar senha" onChange={e => setData({...data ,confirmPassword :e.target.value})} required/>
                {(data.password && data.password!==data.confirmPassword)&& <P1>senhas não correspondem!</P1>}
                <button disabled={(!(data.email && data.password && data.name && data.confirmPassword===data.password)||disable)?true:false} type="submit">Cadastrar</button> 
            </form>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    );
}

export default Signup;