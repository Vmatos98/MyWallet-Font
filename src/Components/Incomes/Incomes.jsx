import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import IncomeStyle from "../Style/Incomes_Spending"
import {Top, Container} from '../Style/HomeStyle';

function NewIncome(){
    const URL = process.env.REACT_APP_URL||'https://mywallet-backand.herokuapp.com/';
    const [data, setData] = useState({
        value:'',
        description:'',
        type:'entrada'
    });
    
    const token = JSON.parse(sessionStorage.getItem('token'));
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    function postData(e){
        setData({...data ,type :'entrada'});
        setDisable(!disable);
        e.preventDefault();
        const promise = axios.post(`${URL}new_transaction`, data, config);
        promise.then(res => {
            console.log(res.data);
            navigate('/home');
        }).catch(err => {
            console.log(err);
        })
    }
    
    return (
        <>
        <Container>
        <Top>
            <h1>Nova entrada</h1>
        </Top>
        <IncomeStyle>
            <form onSubmit={postData}>
                <input type="number" value={data.value} disabled = {disable? true:false} placeholder="Valor" onChange={e => setData({...data ,value :e.target.value})} required/>
                <br></br>
                <input type="text" value={data.description} disabled = {disable?true:false} placeholder="Descrição" onChange={e => setData({...data ,description :e.target.value})} required/>
                <br></br>
                <button disabled={(!(data.value && data.description)||disable)?true:false} type="submit">Salvar entrada</button> 
            </form>
        </IncomeStyle>
        </Container>
        </>
    );
}
export default NewIncome;