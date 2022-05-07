import { useState, useContext, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

import IncomeStyle from "../Style/Incomes_Spending"
import {Top, Container} from '../Style/HomeStyle';
function NewIncome(){
    const [data, setData] = useState({
        value:'',
        description:''
    });
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    function postData(e){
        setDisable(!disable);
        navigate('/home');
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