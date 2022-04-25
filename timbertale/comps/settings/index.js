import styled from "styled-components";
import { ShortButton } from "../Button";
import { FSBackground, SetLine } from "../Display";
import Image from "next/image";
import Slider from "../../public/slider.svg"

export const BigBox = styled.div`
justify-content: center;
background: #FFF8EC;
border-radius:25px; 
max-width: 500px;
min-width: 150px;
max-height: 500px;
z-index: 2;
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
z-index: 2;
`;

export function SettingsModal () {
    return (
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
        <ShortButton onClick = {()=>r.push("/")}>Home</ShortButton>
        <ShortButton>Continue</ShortButton>
        </ButBox>
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
export function SettingsBackdrop(){
    <FSBackground backgroundcolor = "#7D4D2B"></FSBackground>
}