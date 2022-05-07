import { useState, useContext, useEffect} from "react";

import IncomeStyle from "../Style/Incomes_Spending"
import {Top, Container} from '../Style/HomeStyle';
function NewSpending(){
    const [data, setData] = useState({
        value:'',
        description:''
    });
    const [disable, setDisable] = useState(false);
    function postData(e){
        setDisable(!disable);
    }
    return (
        <>
        <Container>
        <Top>
            <h1>Nova saída</h1>
        </Top>
        <IncomeStyle>
            <form onSubmit={postData}>
                <input type="text" value={data.value} disabled = {disable? true:false} placeholder="Valor" onChange={e => setData({...data ,email :e.target.value})} required/>
                <br></br>
                <input type="text" value={data.description} disabled = {disable?true:false} placeholder="Descrição" onChange={e => setData({...data ,password :e.target.value})} required/>
                <br></br>
                <button disabled={(!(data.value && data.description)||disable)?true:false} type="submit">Salvar saída</button> 
            </form>
        </IncomeStyle>
        </Container>
        </>
    );
}
export default NewSpending;