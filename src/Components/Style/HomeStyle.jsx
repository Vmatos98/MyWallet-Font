import styled from "styled-components";

export const Container = styled.div `
display: flex;
flex-wrap: wrap;
justify-content:center;
max-height: 100vh;
`;
export const Top = styled.div `

width: 90%;
max-width: 500px;
height: 15vh;
max-height: 35px;
min-height: 35px;
color: white;

position: absolute;
top: 5vh;
left: 50%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
transform: translate(-50%,-50%);
padding: 5% 0 0 12px;
box-sizing: border-box;
/* margin-bottom: 10px; */
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
}
ion-icon{
    font-size: 28px;
}
`;
export const HomeStyle = styled.div `
flex-wrap: wrap;
color: white;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: rgba(0, 0, 0, 0.6);
padding: 10px;
border-radius: 15px;
width: 90%;
max-width: 500px;
height: 70%;
min-height: 350px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
margin-bottom: 10px;
div{
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 10px;
    color:black;
    h1{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #868686;
        padding: 50px;
    }
}

`;
export const Bottom= styled.div `
position: absolute;
bottom: 0;
/* left: 50%; */
/* transform: translate(-50%,-50%); */
margin-top: 10px;
padding: 10px;
width: 90%;
height: 15%;
max-width: 500px;
/* background: white; */
display: flex;
flex-wrap: wrap;
justify-content:space-between;
button{
    position: relative;
    width: 47%;
    height: 100%;
    border-radius:10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    text-align: left;
    
    padding: 6px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    ion-icon{
        font-size: 17px;
        position: relative;
        justify-content: start;
        /* top:0; */
        /* transform: translate(0,-100%); */
        /* margin-bottom: 10px; */
    }
    p{
        text-align: left;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
}
`;
