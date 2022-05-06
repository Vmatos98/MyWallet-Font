import { useState, useContext, useEffect} from "react";

import Container from "../Style/Container"


function Signup(){
    const [data, setData] = useState({
        email:'',
        password:'',
        name:''
    });
    const [disable, setDisable] = useState(false);

    function postData(e){
        e.preventDefault();
        setDisable(true);
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={postData}>
                <input type="text" value={data.name} disabled = {disable? true:false} placeholder="Nome" onChange={e => setData({...data ,name :e.target.value})} required/>
                <input type="email" value={data.email} disabled = {disable? true:false} placeholder="E-mail" onChange={e => setData({...data ,email :e.target.value})} required/>
                <input type="password" value={data.password} disabled = {disable? true:false} placeholder="Senha" onChange={e => setData({...data ,password :e.target.value})} required/>
                <input type="password" value={data.confirmPassword} disabled = {disable? true:false} placeholder="Confirmar senha" onChange={e => setData({...data ,confirmPassword :e.target.value})} required/>
                {(data.password && data.password!==data.confirmPassword)&& <p>senhas não correspondem!</p>}
                <button disabled={(!(data.email && data.password && data.name && data.confirmPassword===data.password)||disable)?true:false} type="submit">Cadastrar</button> 
            </form>
            <p>Já tem uma conta? Faça login!</p>
            
        </Container>
    );
}

export default Signup;