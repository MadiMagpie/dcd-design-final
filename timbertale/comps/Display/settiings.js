import styled from "styled-components";
import { ShortButton } from "../Button";

export const BigBox = styled.div`
justify-content: center;
background: #FFF8EC;
border-radius:25px; 
max-width: 500px;
min-width: 150px;
max-height: 500px;
`;

export const Settings = styled.div`
`;

export const SetText = styled.div`
display: flex;
flex-direction: column;
`;

export const ButBox = styled.div`
display: flex;
padding: 15px
`;

export const Music = styled.h3`
display: flex;
text-align: left;
left: 0;
flex-direction: row;
justify-content: space-between;
margin: 1em;
`;

export const BSwitch = styled.div`
margin: 0em 0.5em;
display: flex;
justify-content: flex-end;
`;


export default function Test () {
    return (
        <Settings>
            <SetText>
            <Music>
                Music
            </Music>    
            <SoundEffects>
                Sound Effects
            </SoundEffects>
            <TextSize> Text Size </TextSize>
            <DarkMode> Dark Mode</DarkMode>
            <ShortButton>Home</ShortButton>
            </SetText>
            <SetBut>
                <BSwitch>0</BSwitch>
                <BSwitch>0</BSwitch>
                <BSwitch>0</BSwitch>
                <BSwitch>0</BSwitch>
            </SetBut>
        </Settings>
    )
}