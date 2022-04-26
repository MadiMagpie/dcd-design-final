import { useRouter } from 'next/router'
import { TutLives } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import Base from '../../comps/Base';
import { LivesArrow } from '../../comps/Tutorial/arrows';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";


export default function StartThirdTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
      }
      function closeSettingsHandler(){
        setSettingsOpen(false);
}
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                    <Base></Base>
                  
                    <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <TutLives></TutLives>
                        <LivesArrow>  <img src='/greenarrow.svg'/></LivesArrow>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
                        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </ImgBackground>
        )
}