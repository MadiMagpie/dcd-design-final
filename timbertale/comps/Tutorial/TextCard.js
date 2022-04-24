import { Component } from "react";
import { useRouter } from 'next/router'
import { FSBackground, Wrapper, Box, Desc } from "../Display";
import { BackButton, SkipButton, ShortButton } from "../Button";
import { motion } from "framer-motion";

//TO USE WHEN DYNAMIC ROUTING FIGURED OUT 

// export default function TutorialTextCard(props){
//         const r = useRouter();
//         return(
//              <Box as={motion.div} 
//                 initial ={{y:-300}} 
//                 animate = {{y:-50}} 
//                 transiton={{type: "spring", stiffness: 700, damping: 60}}>       
//                         <Wrapper 
//                         margintop = "2em" 
//                         marginbottom = "2em">
//                                 <SkipButton></SkipButton>
//                                 <h2>{props.title}</h2>
//                                 <Desc>{props.desc}</Desc>
//                                 <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/start2")}> Next </ShortButton>      

//                         </Wrapper>
//                 </Box>   
//         )
// }



export function FirstTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:0}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper margintop = "2em" marginbottom = "3.5em">
                                <SkipButton></SkipButton>
                                <h2>Let's start by choosing a forest to save.</h2>
                                <Desc>Let's pick BC Old Growth!</Desc>
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
                                <Desc>The background and questions will change depending on what forest you choose!</Desc>
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
                                <h2>Question Time!</h2>
                                <Desc> You’ll be asked a series of questions, and you’ll choose an answer. </Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/questions")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

