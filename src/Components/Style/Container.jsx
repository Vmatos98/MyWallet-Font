import styled from "styled-components";

export const Container = styled.div `
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
text-decoration: none;
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
        position: relative;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        margin-top:25px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: white;
    }
    a{
        text-decoration: none;
        text-decoration-color: #FFFFFF;
        text-decoration-line: underline;
        color: white;
    }
    a:active{
        text-decoration: none;
        
    }
    Link{
        text-decoration: none;
    
        color: white;
    }
}

`;
export const P1 = styled.h2 `
    position: relative;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    margin-top:25px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: with;
    margin-top: -10px;
    margin-bottom: 10px;
`;
