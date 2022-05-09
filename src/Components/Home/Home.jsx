/* eslint-disable react-hooks/exhaustive-deps */
// import { set } from 'express/lib/application';
import {useState, useEffect} from 'react';
import { HomeStyle, Top, Bottom, Container, P } from './../Style/HomeStyle';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

function Home(){
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL ||'https://mywallet-backand.herokuapp.com/';
    const [incomes, setIncomes] = useState([]);
    console.log(incomes);
    const token = JSON.parse(sessionStorage.getItem('token'));
    const config = {
        headers: { authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        if(!token){
            navigate('/');
        }
        const getData = async() =>{
            try {
                const {data} = await axios.get(`${URL}statement`, config);
                setIncomes(data);
            }catch (error) {
                // alert("Ocorreu um error ao carregar os dados");
            }
        }
        getData();
    
    }, []);

    function logOut(){
        
        const promise = axios.post(`${URL}sign-out`, "", config);
        promise.then(res => {
            console.log(res.data);
            sessionStorage.removeItem('token');
            navigate('/');
        }).catch(err => {
            alert("Ocorreu um error ao deslogar: " + err.response.data.error);
        })
        
    }

    function deleteValue(id){
        const text = "Deseja realmente apagar essa operação?";
        if(window.confirm(text)){
        const header = {
            headers: { 
                authorization: `Bearer ${token}`,
                id: id
            }
        };
        const promise = axios.delete(`${URL}delete_value`, header);
        promise.then(res => {
            console.log(res.data);
            document.location.reload(true);
        }).catch(err => {
            alert("Ocorreu um error ao deletar: " + err.response.data.error);
            document.location.reload(true);
        })
    }
    }

    return(
        <>
        <Container>
            <Top>
                <h1>Olá, {incomes.name}</h1>
                <ion-icon name="log-out-outline" onClick={()=>logOut()}></ion-icon>
            </Top>
            <HomeStyle>
                <div>
                    {
                        (incomes.all?.length)?
                        <>
                        <ul>
                            {Object.keys(incomes.all).map(key => 
                            <li key={key}>
                                <P model="date">{incomes.all[key].date}</P> 
                                <p2>{incomes.all[key].description}</p2>
                                <P model={incomes.all[key].type==="entrada"?"green":"red"}>{parseFloat(incomes.all[key].value).toFixed(2)}</P>
                                <span onClick={()=>{deleteValue(incomes.all[key]._id)}}>x</span> 
                            </li>
                            )}
                        </ul>
                        <h2>SALDO: <span>{incomes.saldo.toFixed(2)}</span></h2>
                        </>
                        :
                        <h1>Não há registros de
                        entrada ou saída</h1>
                        
                    }
                </div>
            </HomeStyle>
            <Bottom>
                <Link to="/income">
                    <button><ion-icon name="add-circle-outline"></ion-icon> <p>Nova<br/> entrada</p></button>
                </Link>
                <Link to="/spending">
                    <button><ion-icon name="remove-circle-outline"></ion-icon> <p>Nova <br/>saída</p></button>
                </Link>
            </Bottom>
            
        </Container>
        </>
    );
}

export default Home;