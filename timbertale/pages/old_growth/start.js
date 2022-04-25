import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ogbg } from "../../data/og_bg";
import { ImgBackground } from "../../comps/Display";
import { useState } from "react";
import styled from "styled-components";
import LifeHolder from "../../comps/Lives";
import { motion } from "framer-motion";


const QuestionBox = styled.div`
background: #FFFAF1;
display: flex;
border-radius: 25px; 
max-width: 500px;
min-width: 200px;
flex-direction: column;
align-items: center;
margin: 15% 5%;
padding: 20px 15px;
justify-content: center;
`;

const AnswerBox = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
max-width: 250px;`;

const Question = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
padding: 10px;
margin: 10px;
justify-content: center;
text-align: center;
font-weight: 500;
color: #7D4D2B;
font-size: 1.5 rem;
`;

const Answer = styled.button`
font-family: 'Poppins', sans-serif;
background: #EB6A00;
margin: 15px 10px;
padding: 15px 10px;
border-radius: 8px;
text-align: center;
color: #FFFAF1;
min-width: 100px;
font-weight: 500;
font-size: 1rem;
border-style: none; 
`;

// function Base(){
//         return(
//                 <div className = "base">
//                         <LifeHolder></LifeHolder>
//                         {/* add settings comp here*/}
//                         <img className = "lumberjack" src = "/lumberjack1.svg"/>
//                         <img className="startTree" src = "/OldGrowth_Stage1.svg"/>
//                 </div>
//          )
// }

export default function OldGrowthStart() {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [showEnd, setShowEnd] = useState(false);
        const [questionResult, setQuestionResult] = useState(0);
        const [currentBackground, setCurrentBackground] = useState(0);

        const handleChoiceClick = (isCorrect) =>{
                const nextBackground = currentBackground +1;

                if (isCorrect === true){
                        setCurrentBackground(nextBackground);
                } else{
                        alert ("wrong");
                }


                const nextQuestion = currentQuestion + 1;
                //make sure you dont go out of array scope
                if(nextQuestion < qs.length){
                      setCurrentQuestion(nextQuestion);  
                } else {
                        //do something when array does go out of scope;
                        setShowEnd(true);
                }
        }


    return (
      <ImgBackground background = "/oldgrowth.svg">
        <div className = "base">
                <LifeHolder></LifeHolder>
                {/* add settings comp here*/}
                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                <img className="startTree" src = {ogbg[currentBackground].bg}/>
                {/* <img className="startTree" src = "/OldGrowth_Stage1.svg"/> */}

        </div>
        <QuestionBox
        as={motion.div} 
        animate = {{y:30}} 
        transiton={{delay:500}}>
                <Question>
                {qs[currentQuestion].title}
                </Question>
                <AnswerBox>
                        {qs[currentQuestion].choices.map((pick)=> 
                        <Answer onClick = {() => handleChoiceClick(pick.isCorrect)}>{pick.choice}</Answer>)}
                </AnswerBox>
        </QuestionBox>
      
      </ImgBackground>
    )
  }