import Image from "next/image";
import { Heading, Desc, LearnBackground, Wrapper } from "../../comps/Display";
import { LongButton, BackButton, SettingsLight } from "../../comps/Button";
import OGLearn1 from "../../public/OGLearn1.png"
import OGLearn2 from "../../public/OGLearn2.png"
import OGLearn3 from "../../public/OGLearn3.png"
import { useState } from "react";
import { useRouter } from "next/router";
import { SettingsModal, SetButton, SettingsBackdrop } from "../../comps/settings";

export default function LearnOld() {
    const [currentBackground, setCurrentBackground] = useState(0);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const r = useRouter();

    function settingsHandler(){
            setSettingsOpen(true);
    }

    return (
        <LearnBackground>
            
            <BackButton></BackButton>
            <SetButton onClick = {settingsHandler}> <img src='/settingswhite.svg'/></SetButton>
            <Wrapper margintop="5em"> <Heading color="#FFFFFF"> British Columbia’s Old Growth Forest  </Heading></Wrapper>
            <Wrapper><Desc textalign="left" color="#FFFFFF">Old-growth forests have great ecological and cultural values, they provide specialized habitats not found in younger forests. In BC much of the original old growth has been logged,cleared, burnt by wildfires, attacked by bark beetles, or submerged in hydroelectric reservoirs.</Desc></Wrapper>
            <Wrapper><Image src={OGLearn1}
        width={300}
        height={200}/></Wrapper>
           <Wrapper> <Desc textalign="right" color="#FFFFFF"> Delivering crucial ecosystem services, including clean air and water, and carbon sequestration and storage. Over 400 species of plants and animals rely on BC’s old-growth forests for at least a part of their life cycle. </Desc></Wrapper>
           <Wrapper><Image src={OGLearn2}
        height={200}
        width={300}
        priority
        /></Wrapper>
       <Wrapper> <Desc textalign="left" color="#FFFFFF"> The BC government used to regard protection of old growth as one of the most effective ways of conserving biodiversity at the landscape level; and old-growth forests are very important to the public, for ecological, spiritual, aesthetic, and other intrinsic values. </Desc></Wrapper>
       <Wrapper><Image src={OGLearn3}
        width={300}
        height={200}
        /></Wrapper>
       <Wrapper> <Desc textalign="right" color="#FFFFFF"> 
            Old-growth forests also have deep cultural and spiritual significance for humans, and provide a vital cultural resource for First Nations.
        </Desc></Wrapper>
        <Wrapper> <LongButton onClick={()=>r.push("/old_growth")}>Play as this forest</LongButton></Wrapper>
        {settingsOpen && <SettingsModal/>}
        {settingsOpen && <SettingsBackdrop/>}
        </LearnBackground>
    )
}