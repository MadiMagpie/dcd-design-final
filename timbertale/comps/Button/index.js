import { Component } from 'react';
import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'


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

export const ShortButton = styled(LongButton)`
min-width: 100px;
padding: 0.5em 0.25em; 
margin-left:${props => props.marginleft || "0"};
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
margin-bottom: 25px;
margin-left: 75%;
`
export function BackButton(){
        const r = useRouter();
        return (
                <BButton onClick = {r.back}>
                        <img src="/backArrow.svg"></img>
                        back      
                </BButton>
        )
}
//onClick = {skiproute.push("/tutorial/last")}
export function SkipButton(){
        const skiproute = useRouter();
        return(
                <SButton >
                        SKIP 
                        <img src = "/skiparrow.svg"></img>                             
                </SButton>
        )
}