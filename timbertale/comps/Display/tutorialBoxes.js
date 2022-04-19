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
                                <p>We’ll be walking you through how to play, and what to expect!</p>
                                <p>This should take you about 2 minutes.</p>
                        </Wrapper>
                        <ShortButton marginleft = "50%" onClick = {() => r.push("/tutorial/choosetut")}> Next </ShortButton>
                                
                </Box>
        )
        
}

export function FirstTutorial(){

}