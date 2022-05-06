import styled from "styled-components";


const Container = styled.div `
color: white;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: rgba(0, 0, 0, 0.6);
padding: 15px;
border-radius: 15px;
max-width: 500px;
height: 70%;
min-height: 350px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
h1{
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    margin-top: 10%;
}
form{
    position: relative;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    input{
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        margin-bottom: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 19.976px;
        line-height: 25px;
        color: #000;
    }
    input::placeholder { 
        color: #262121;
        opacity: 1;
    }
    input:disabled{
        color: #AFAFAF;
    }
    button{
        background: #A328D6;
        border-radius: 4px;
        width: 303px;
        height: 45px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }
    button:disabled {
        opacity: 0.7;
    }
    p{
        font-family: 'Raleway';
    }
}

`;
export default Container;