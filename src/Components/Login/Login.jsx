import { useState} from "react";
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Container} from "../Style/Container"

function Login(){
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL;
    const [data, setData] = useState({
        email:'',
        password:''
    });
    const [disable, setDisable] = useState(false);
    function postData(e){
        setDisable(!disable);
        e.preventDefault();
        const promise = axios.post(`${URL}sig-in`, data);
        promise.then(res => {
            console.log(res.data);
            sessionStorage.setItem('token', JSON.stringify(res.data));
            navigate('/home');
        }).catch(err => {
            console.log(err);
            alert("Ocorreu um error ao fazer login: Verifique seu email e senha e tente novamente" );
        })
    }
    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={postData}>
                <input type="email" value={data.email} disabled = {disable? true:false} placeholder="E-mail" onChange={e => setData({...data ,email :e.target.value})} required/>
                <br></br>
                <input type="password" value={data.password} disabled = {disable?true:false} placeholder="Senha" onChange={e => setData({...data ,password :e.target.value})} required/>
                <br></br>
                <button disabled={(!(data.email && data.password)||disable)?true:false} type="submit">Entrar</button> 
            </form>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    );
}
export default Login;