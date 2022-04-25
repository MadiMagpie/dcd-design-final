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

export const SetBox = styled.h3`
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

import { FSBackground, SetLine } from "../Display";
import Image from "next/image";
import Slider from "../../public/slider.svg"

export function SettingsOverlay () {
    return (
        <FSBackground>
       <BigBox>
        <Settings>
            <SetText>
            <SetBox>
                Music
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </SetBox>    
<SetLine/>
            <SetBox>
                Sound Effects
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </SetBox>
            <SetLine/>
            <SetBox> 
                Text Size 
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch> 
            </SetBox>
                  <SetLine/>
            <SetBox> Dark Mode <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch> </SetBox>
            </SetText>
            <SetLine/>
        </Settings>
        <ButBox>
        <ShortButton>Home</ShortButton>
        <ShortButton>Continue</ShortButton>
        </ButBox>
        </BigBox>
        </FSBackground>
    )
}