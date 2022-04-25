import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";

export default function OldGrowth() {
    
  
    return (
      <ImgBackground background = "/oldgrowth.svg">
        <WelcomeOG heading = "Welcome to the Old Growth Forest!"></WelcomeOG>
      {/* <QuestionBox>
          <Question>
            {qs[0].title}
          </Question>
          <AnswerBox>
          <Answer>
                {qs[0].choice[0]}
            </Answer>
            <Answer>
                {qs[0].choice[1]}
            </Answer>
            <Answer>
                {qs[0].choice[2]}
            </Answer>
            <Answer>
                {qs[0].choice[2]}
            </Answer>
          </AnswerBox>
      </QuestionBox> */}
      <div className = "base">
        {/* add settings comp w className = "settings" */}
        <img className = "lumberjack" src = "/lumberjack1.svg"/>
        <img className="startTree" src = "/OldGrowth_Stage1.svg"/>
      </div>
      </ImgBackground>
    )
  }