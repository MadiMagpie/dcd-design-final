import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground, Wrapper, Desc, Box } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";
import { SettingsDark } from "../../comps/Button";
import { TutArrow2, Tut2Q } from "../../comps/Tutorial/arrows";


export default function TutQuestion (){

return (
    <ImgBackground background = "/oldgrowth.svg">
        <SettingsDark></SettingsDark>
      <Base></Base>  <Tut2Q> <Desc weight="800">Now lets try this one</Desc></Tut2Q> <TutArrow2><img src="/greenarrow.svg"/></TutArrow2>
      <QuestionBox>
              <Question>
              {qs[1].title}
              </Question>
              <AnswerBox>
                      {qs[2].choices.map((pick)=> <Answer>{pick.choice}</Answer>)}
              </AnswerBox>
      </QuestionBox>
   
     
    </ImgBackground>
  )
}