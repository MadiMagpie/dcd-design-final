import { LearnBackground, Wrapper, Heading, Desc, RowWrapper, HowtoLine } from "../../comps/Display";
import { BackButton, LongButton, SettingsLight } from "../../comps/Button";
import Image from "next/image";
import Htqs from "../../public/howtoqs.svg"
import Httree from "../../public/howtotree.svg"
import lumber from "../../public/lumberjack1.svg"
import { useRouter } from "next/router";

export default function HowToPlay () {
    const r = useRouter();
    return (
<LearnBackground>
    <BackButton></BackButton>
    <SettingsLight></SettingsLight>
     <Wrapper margintop="3em">
         <Heading color="#FFFFFF">How to Play</Heading>
     </Wrapper>
     <RowWrapper>
         <Image src={Htqs}
     height={300}
     width={300}/>
         <Desc style={{marginLeft:"1em"}} color="#FFFFFF">First a question will appear, and read it carefully! Next read the four answer and chose the one you think is correct.</Desc>
     </RowWrapper>
     <HowtoLine/>
     <RowWrapper>
         <Desc style={{margin:"1em"}} color="#FFFFFF">If you get the quesstion right the tree will grow and you will continue on to the next question. </Desc>
     <Image src={Httree}
     height={300}
     width={200}/>
     </RowWrapper>
     <HowtoLine/>
     <RowWrapper>
         <Image src={lumber}
         height={300}
         width={300}/>
         <Desc style={{marginLeft:"1em"}} color="#FFFFFF"> If you get the question wrong the lumberjack will grab an axe and swing at your tree. Don't get 3 wrong or your tree will fall over.</Desc>
     </RowWrapper>
<LongButton onClick={()=>r.push("/choose")}>Choose your forest</LongButton>
<LongButton onClick={()=>r.push("/tutorial")}>Tutorial</LongButton>
</LearnBackground>
    )
}