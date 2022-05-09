import styled from "styled-components";

export const Container = styled.div `
display: flex;
flex-wrap: wrap;
justify-content:center;

max-height: 100vh;
`;

export const Top = styled.div `
position: absolute;
width: 90%;
max-width: 500px;
top:10px;
height: 12vh;
min-height: 100px;
color: white;
/* transform: translate(-50%,-50%); */
padding-left: 12px;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

    h1{
        position: relative;
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
display: flex;
flex-wrap: wrap;
color: white;
position: absolute;
top: 15%;
/* left: 50%; */
/* transform: translate(-50%,-50%); */
background-color: rgba(0, 0, 0, 0.6);
padding: 10px;
border-radius: 15px;
width: 90%;
max-width: 500px;
height: 70%;
min-height: 350px;
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
    ul{
        height: 96%;
        padding-bottom: 35px;
        overflow: auto;

    li{
        display: flex;
        align-items: initial;
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 25px;
        
        p2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            display: flex;
            width: 70%;
            padding-left: 5%;
            justify-content: flex-start;
        }
        span{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            color: #c6c6c6;
            margin-left: 5px;
        }
    }
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        position: absolute;
        bottom: 10px;
        padding-left: 12px;
        padding-right: 12px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: white;
        span{
            color: #03AC00;
        }
    }

}

`;
export const P = styled.p `
    font-family: 'Raleway';
    display: flex;
    justify-content: flex-end;
    width: 15%;
    color: ${(props) => (props.model===`date`?`#C6C6C6`: props.model===`green`?`#03AC00`:`#C70000`)};
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

a{
    position: relative;
    width: 47%;
    border-radius:10px;
    padding: 6px;
    background: #3E0850;
    button{
        background: #3E0850;
        height: 100%;
        border-radius:10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        display: flex;
        flex-direction: column;
        text-align: left;
        ion-icon{
            font-size: 17px;
            position: relative;
            justify-content: start;
            color: white;
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
            color: white;
        }
    }
}

`;
