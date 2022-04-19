import { Component } from 'react';
import styled from 'styled-components';
import "typeface-poppins";

export const LongButton = styled.button `
background: ${props => props.white ? "#FFF8EC" : "#EB6A00"};
color: ${props => props.white ?  "#999529" : "#FFF8EC"};
display: flex; 
font-family: 'Poppins', sans-serif;
font-weight: 500;
align-items: center;
justify-content: center; 
font-size: 1.5em; 
margin: 1em;
padding: 1em 2em;
border-radius: 15px;
border-style: none; 
min-width: 300px;
box-shadow: 0px 5px 10px #BFBFBF;
`

export const ShortButton = styled(LongButton).attrs(props => ({
        marginleft: props.marginleft || "0"

}))`
min-width: 100px;
padding: 0.5em 0.25em; 
margin-left:${props => props.marginleft};
`

export const ForestButton = styled(LongButton)`
background: #999529;
color: #FFF8EC;
max-width: 300px;
padding: 1em 1em;
`

const BButton = styled.button`
font-family: 'Poppins', sans-serif;
font-weight: 600; 
color: #FFF8EC;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 85px;
font-size: 1em;
position: absolute;
align-items: center;
top: 5%;
left: 5%;
border: none;
background-color: transparent;
`;

const SButton = styled.button`
background: transparent;
border: none;
background-color: transparent;
font-family: 'Poppins', sans-serif;
font-size: 1em;
font-weight: 600;
color: #7D4D2B;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width:75px;
margin-left: 75%;
`
export class BackButton extends Component{
        render(){
                return (
                <BButton>
                        <img src="/backArrow.svg"></img>
                        back      
                </BButton>
                )
        }
}

export class SkipButton extends Component{
        render(){
                return(
                        <SButton>
                                SKIP 
                                <img src = "/skiparrow.svg"></img>                             
                        </SButton>
                )
        }
}