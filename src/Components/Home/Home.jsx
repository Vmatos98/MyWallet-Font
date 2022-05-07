// import { set } from 'express/lib/application';
import {useState} from 'react';
import { HomeStyle, Top, Bottom, Container } from './../Style/HomeStyle';
import {Link} from 'react-router-dom';

function Home(){
    const [entry, setEntry] = useState([]);
    console.log("entry ",entry);

    return(
        <>
        <Container>
            <Top>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Top>
            <HomeStyle>
                <div>
                    {
                        (entry.length>0)?
                        <p>lista de itens</p>
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