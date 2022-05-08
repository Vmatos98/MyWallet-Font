/* eslint-disable react-hooks/exhaustive-deps */
// import { set } from 'express/lib/application';
import {useState, useEffect} from 'react';
import { HomeStyle, Top, Bottom, Container, P } from './../Style/HomeStyle';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

function Home(){
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL;
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
                const {data} = await axios.get(`${URL}/statement`, config);
                setIncomes(data);
            }catch (error) {
                // alert("Ocorreu um error ao carregar os dados");
            }
        }
        getData();
    
    }, []);

    function logOut(){
        sessionStorage.removeItem('token');
        navigate('/');
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
                        (incomes.all)?
                        <>
                        <ul>
                            {Object.keys(incomes.all).map(key => <li key={key}><P model="date">{incomes.all[key].date}</P> <p2>{incomes.all[key].description}</p2> <P model={incomes.all[key].type==="entrada"?"green":"red"}>{parseFloat(incomes.all[key].value).toFixed(2)}</P> </li>
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