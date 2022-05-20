import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ogbg } from "../../data/og_bg";
import { chopstage } from "../../data/chop";
import { ImgBackground, SmallIcon } from "../../comps/Display";
import { useState } from "react";
import styled from "styled-components";
import { lives } from "../../data/lives";
import { AnimatePresence, motion } from "framer-motion";
import { SettingsModal, SetButton, SettingsBackdrop } from "../../comps/Settings";


const QuestionBox = styled(motion.div)`
background: #FFFAF199;
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
max-width: 250px;
`;

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
font-size: 1.25em;
`;

const Answer = styled.button`
font-family: 'Poppins', sans-serif;
background:  ${props => props.bg ||"#EB6A00"};
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

export default function OldGrowthStart() {
        const [showCorrect, setShowCorrect] = useState(false);
        const [showIncorrect, setShowIncorrect] = useState(false);
        const [currentBackground, setCurrentBackground] = useState(0);
        const [currentLives, setCurrentLives] = useState(0);
        const [settingsOpen, setSettingsOpen] = useState(false);
        const [currentChopStage, setCurrentChopStage] = useState(0);

        const r = useRouter();
        var {qnum} = r.query;
        if(qnum === undefined){
                qnum = 0;
        }

        function settingsHandler(){
                setSettingsOpen(true);
        }
        function closeSettingsHandler(){
                setSettingsOpen(false);
        }

        function showCorrectHandler(){
                setShowCorrect(true);
                setTimeout(() => {
                        setShowCorrect(false);
                }, 2000);
        }
        
        function showIncorrectHandler(){
                setShowIncorrect(true);
                setTimeout(() => {
                        setShowIncorrect(false);
                }, 2000);
        }

        const handleChoiceClick = (isCorrect, e) =>{
                const nextBackground = currentBackground + 1;
                const minusLife = currentLives + 1;
                const nextChopStage = currentChopStage + 1;

                e.target.disabled = true;
                e.target.classList.remove("ready");
                if (isCorrect === true){
                        showCorrectHandler();
                        setCurrentBackground(nextBackground);
                } else {
                        
                        if(minusLife < lives.length){
                                showIncorrectHandler();
                                setCurrentLives(minusLife); 
                                setCurrentChopStage(nextChopStage);
                                 
                        } else {
                               r.push({
                                      pathname: "/old_growth/endLose"
                                });
                        } 
                }
                //while there is still questions, give next q
                if(qnum < qs.length-1 && minusLife < lives.length){
                        setTimeout(() => {
                                r.push({
                                        pathname:"/old_growth/start/",
                                        query:{
                                                qnum: Number(qnum)+1
                                        }
                                })
                        }, 2000);
                      
                } 
                if(qnum >= qs.length-1){
                        //if out of questions, tree grows to win
                               r.push({
                                      pathname: "/old_growth/endWin"
                                });
                }
        }


    return (
      <ImgBackground background = "/oldgrowth.svg">
        <div className = "base">
                {lives[currentLives].status}
                <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                <img className="startTree" src = {ogbg[currentBackground].bg}/>
                <img className="startChop" src = {chopstage[currentChopStage].chop}/>
        </div>
        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
        <AnimatePresence initial ={false}>
        <QuestionBox
        key = {qnum}
        initial = {{y:-500, opacity:0}}
        animate = {{y:-30, opacity:1}} 
        transiton={{delay:300}}
        exit={{y:-500, opacity: 0}}>
                <Question>
                {qs[qnum].title}
                </Question>
                {showCorrect && <SmallIcon src = "/correct.svg"/>}
                {showIncorrect && <SmallIcon src = "/incorrect.svg"/>}
                <AnswerBox>
                        {qs[qnum].choices.map((pick)=> 
                        <Answer className ="ready" bg = {pick.clr} onClick = {(e) => handleChoiceClick(pick.isCorrect, e)}>{pick.choice}</Answer>)}
                </AnswerBox>
        </QuestionBox>
        </AnimatePresence>
      </ImgBackground>
    )
  }