import styled from "styled-components";
import { ShortButton } from "../Button";
import { FSBackground, SetLine, Wrapper } from "../Display";
import Image from "next/image";
import Slider from "../../public/slider.svg"
import { useRouter } from "next/router";
import { useState } from "react";


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

export const Selector = styled.div`
height: 30px;
width: 50px;
background: #FFFFFF;
border-radius: 6px;
display: flex;
justify-content: ${props => props.side || "flex-start"};
align-items: center;
`;

export const SelDot = styled.div`
height: 21px;
width: 21px;
background: #EB6A00;
border-radius: 10px;
`;

const TextSizeWrapper = styled.div`
height: 30px;
background: ${props => props.background || "#FFFFFF"};
color: ${props => props.color};
font-size: ${props => props.size};
display: flex;
justify-content: center;
margin-right: 5px;
padding: 0px 3px;
border-radius: 5px;
align-items: center;
`;

export function SettingsSlide (props) {
    
}

export function SettingsModal(props) {
    const r = useRouter();
    const [settingsOpen, setSettingsOpen] = useState(true);

    function settingsHandler(){
        setSettingsOpen(true);
    }
    function closeSettingsHandler(){
        setSettingsOpen(false);
        }
    
    return (
        <BigBox>
            <SettingItemWrapper>
                <SetText>
                    <SetBox>
                        Music
                        <Selector>
                            <SelDot></SelDot>
                        </Selector>
                    </SetBox>    
                    <SetLine/>
                    <SetBox>
                        Sound Effects
                        <Selector>
                            <SelDot></SelDot>
                        </Selector>
                    </SetBox>
                    <SetLine/>
                    <SetBox> 
                        Text Size 
                        <div style={{display:"flex"}}>
                        <TextSizeWrapper background="#7D4D2B" color="#FFFFFF" size="0.8em">
                            aA
                        </TextSizeWrapper>
                        <TextSizeWrapper>
                            aA
                        </TextSizeWrapper>
                        </div>
                    </SetBox>
                        <SetLine/>
                    <SetBox> Dark Mode 
                        <Selector>
                            <SelDot></SelDot>
                        </Selector>
                        </SetBox>
                        <SetLine/>
                </SetText>
                <ButBox>
                    <ShortButton marginleft = "20" onClick = {()=>r.push("/")}>Home</ShortButton>
                    <ShortButton marginleft = "20" onClick = {closeSettingsHandler}>Continue</ShortButton>
                </ButBox>
            </SettingItemWrapper>
        </BigBox>
    )
}

// export function SettingsLight(){
//     const r = useRouter();
//     return(
//             <SetButton onClick={()=>r.push("/setting")}>
//                     <img src='/settingswhite.svg'/>
//             </SetButton>
//     )
// }


// export function SettingsDark(){
//     const r = useRouter();
//     return(
//             <SetButton>
//                     <img src='/settings.svg'/>
//             </SetButton>
//     )
// }
// export function SettingsBackdrop(){
//     // <FSBackground backgroundcolor = "#7D4D2B" zindex = "3"></FSBackground>

// }