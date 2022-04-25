import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";


export default function OldGrowthStart() {
    
    return (
      <ImgBackground background = "/oldgrowth.svg">
        <Base></Base>
        <QuestionBox>
                <Question>
                {qs[0].title}
                </Question>
                <AnswerBox>
                        {qs[0].choices.map((pick)=> <Answer>{pick.choice}</Answer>)}
                </AnswerBox>
        </QuestionBox>
      
      </ImgBackground>
    )
  }