import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";
import { useState } from "react";
import LifeHolder from "../../comps/Lives";
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";



export default function OldGrowth() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  function settingsHandler(){
    setSettingsOpen(true);
}
  
    return (
      <ImgBackground background = "/oldgrowth.svg">
        {/* <Base></Base> */}
        <div className = "base">
          <LifeHolder></LifeHolder>
                <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                <img className="startTree" src = "/OldGrowth_Stage1.svg"/>
        </div>
        
        <WelcomeOG heading = "Welcome to the Old Growth Forest!"></WelcomeOG>
        {settingsOpen && <SettingsModal/>}
        {settingsOpen && <SettingsBackdrop/>}
      </ImgBackground>
    )
  }