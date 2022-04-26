import { FSBackground, Heading, Wrapper } from "../../comps/Display";
import { BackButton, LongButton } from "../../comps/Button";
import { useRouter } from "next/router";

export default function LearnOG () {
    const r = useRouter();

    return (
        <FSBackground>
            <BackButton></BackButton><Wrapper>
            <Heading color="#FFF8EC">Choose a forest to learn about </Heading></Wrapper>
            <LongButton onClick={()=>r.push("/learning/LearnOG")} green> Old Growth</LongButton>
            <LongButton green>Sumatran</LongButton>
            <LongButton green>Amazon</LongButton>
        </FSBackground>
    )
}