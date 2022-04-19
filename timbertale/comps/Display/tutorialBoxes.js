import { Component } from "react";
import { useRouter } from 'next/router'
import { FSBackground, Box, Wrapper } from ".";
import { BackButton, SkipButton, ShortButton } from "../Button";


export function WelcomeTutorial(){
        const r = useRouter();
        return(
                <Box>
                        <Wrapper margintop = "4em">
                        <SkipButton></SkipButton>
                                <h1>Welcome to TimberTale's tutorial!</h1>
                                <h3>We’ll be walking you through how to play, and what to expect!</h3>
                                <p>This should take you about 2 minutes.</p>
                        </Wrapper>
                        <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/choose")}> Next </ShortButton>      
                </Box>
        )
}

export function FirstTutorial(){
        const r = useRouter();
        return(
                <Box>
                        <Wrapper margintop = "2em">
                        <SkipButton></SkipButton>
                                <h2>Let's start by choosing a forest to save.</h2>
                                <p>Let's pick BC Old Growth!</p>
                        </Wrapper>
                </Box>
        )

}