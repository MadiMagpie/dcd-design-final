import { Settings, Music, SoundEffects, TextSize, DarkMode, BSwitch, SetText, SetBut, ButBox, BigBox } from "../../comps/Display/settiings";
import { ShortButton } from "../../comps/Button";
import { FSBackground } from "../../comps/Display";
import Image from "next/image";
import Slider from "../../comps/Display/graphics-svg-jpeg/slider.svg"

export default function Test () {
    return (
        <FSBackground>
       <BigBox>
        <Settings>
            <SetText>
            <Music>
                Music
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </Music>    
            <Music>
                Sound Effects
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </Music>
            <Music> Text Size <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch> </Music>
            <Music> Dark Mode <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch> </Music>
            </SetText>
        </Settings>
        <ButBox>
        <ShortButton>Home</ShortButton>
        <ShortButton>Continue</ShortButton>
        </ButBox>
        </BigBox>
        </FSBackground>
    )
}