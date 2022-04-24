import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { FSBackground } from "../../comps/Display";

export default function OldGrowth() {
    
  
    return (
        <FSBackground>
      <QuestionBox>
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
      </QuestionBox>
      </FSBackground>
    )
  }