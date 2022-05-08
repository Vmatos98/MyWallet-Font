import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import IncomeStyle from "../Style/Incomes_Spending"
import {Top, Container} from '../Style/HomeStyle';
function NewSpending(){
    const URL = process.env.REACT_APP_URL;
    const token = JSON.parse(sessionStorage.getItem('token'));
    const [data, setData] = useState({
        value:'',
        description:'',
        type:'saida'
    });
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    function postData(e){
        
        setDisable(!disable);
        e.preventDefault();
        const promise = axios.post(`${URL}/new_transaction`, data, config);
        promise.then(res => {
            console.log(res.data);
            navigate('/home');
        }).catch(err => {
            alert("Ocorreu um error ao criar a transação: " + err.response.data.error);
            navigate('/home');
        })
    }
    return (
        <>
        <Container>
        <Top>
            <h1>Nova saída</h1>
        </Top>
        <IncomeStyle>
            <form onSubmit={postData}>
                <input type="number" value={data.value} disabled = {disable? true:false} placeholder="Valor" onChange={e => setData({...data ,value :e.target.value})} required/>
                <br></br>
                <input type="text" value={data.description} disabled = {disable?true:false} placeholder="Descrição" onChange={e => setData({...data ,description :e.target.value})} required/>
                <br></br>
                <button disabled={(!(data.value && data.description)||disable)?true:false} type="submit">Salvar saída</button> 
            </form>
        </IncomeStyle>
        </Container>
        </>
    );
}
export default NewSpending;