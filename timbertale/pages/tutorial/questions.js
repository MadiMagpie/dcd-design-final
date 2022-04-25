import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground, Wrapper, Desc, Box } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";
import { SettingsDark } from "../../comps/Button";
import { TutArrow, Tut1q } from "../../comps/Tutorial/arrows";

export default function TutQuestion (){

return (
    <ImgBackground background = "/oldgrowth.svg">
        <SettingsDark></SettingsDark>
      <Base></Base>
      <QuestionBox>
              <Question>
              {qs[0].title}
              </Question>
              <AnswerBox>
                      {qs[0].choices.map((pick)=> <Answer>{pick.choice}</Answer>)}
              </AnswerBox>
      </QuestionBox>
    <TutArrow>  <img src="/greenarrow.svg"/></TutArrow><Tut1q> <Desc weight="800">Lets try picking this one</Desc></Tut1q>
     
    </ImgBackground>
  )
}