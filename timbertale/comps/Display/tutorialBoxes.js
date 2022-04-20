import { Component } from "react";
import { useRouter } from 'next/router'
import { FSBackground, Box, Wrapper } from ".";
import { BackButton, SkipButton, ShortButton } from "../Button";
import { motion } from "framer-motion";



export function WelcomeTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-100}} 
                animate = {{y:30}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}> 
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
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:0}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "3.5em">
                                <SkipButton></SkipButton>
                                        <h2>Let's start by choosing a forest to save.</h2>
                                        <p>Let's pick BC Old Growth!</p>
                        </Wrapper>
                </Box>
        )

}

export function SecondTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Great Job!</h2>
                                <p>The background and questions will change depending on what forest you choose!</p>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/start2")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

export function ThirdTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Question Time</h2>
                                <p>The background and questions will change depending on what forest you choose!</p>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/questions")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

export function FinishTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <h1>Congratulations on finishing the tutorial!</h1>
                                <h2>Would you like to: </h2>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/")}> Start </ShortButton>
                                <h3> or </h3>   
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/")}> Return Home </ShortButton>
                        </Wrapper>
                </Box>
        )
}

