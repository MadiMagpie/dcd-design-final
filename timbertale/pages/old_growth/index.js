import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";


export default function OldGrowth() {
    
  
    return (
      <ImgBackground background = "/oldgrowth.svg">
        <Base></Base>
        <WelcomeOG heading = "Welcome to the Old Growth Forest!"></WelcomeOG>
      </ImgBackground>
    )
  }