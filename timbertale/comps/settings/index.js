import styled from "styled-components";
import { ShortButton } from "../Button";
import { FSBackground, SetLine, Wrapper } from "../Display";
import Image from "next/image";
import Slider from "../../public/slider.svg"
import { useRouter } from "next/router";


export const BigBox = styled.div`
justify-content: center;
background: #FFF8EC;
border-radius:25px; 
max-width: 75%;
min-width: 150px;
max-height: 500px;
position: fixed;
z-index: 4;
`;

export const SetText = styled.div`
display: flex;
flex-direction: column;
padding: 15% 5% 0% 5%;
`;

export const ButBox = styled.div`
display: flex;
flex-direction: row;
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

const SettingItemWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

export const SetButton = styled.button`
cursor: pointer;
color: #FFF8EC;
width: 50px;
position: fixed;
align-items: center;
top: 4%;
right: 5%;
border: none;
background-color: transparent;
z-index: 4;
`;

export const SettingsBackdrop = styled.div`
background-color: #653E23C9;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  position: fixed;

`;

export function SettingsModal(props) {
    const r = useRouter();
    return (
        <BigBox>
            <SettingItemWrapper>
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
                        <SetLine/>
                </SetText>
                <ButBox>
                    <ShortButton marginleft = "20" onClick = {()=>r.push("/")}>Home</ShortButton>
                    <ShortButton marginleft = "20"onClick = {props.onClick}>Continue</ShortButton>
                </ButBox>
            </SettingItemWrapper>
        </BigBox>
    )
}
