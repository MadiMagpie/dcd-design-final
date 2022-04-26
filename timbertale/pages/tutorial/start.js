import { useRouter } from 'next/router'
import { SecondTutorial } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import Base from '../../comps/Base';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";


export default function StartSecondTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
      }
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                        <Base></Base>
                        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <SecondTutorial></SecondTutorial>
                        {settingsOpen && <SettingsModal/>}
                        {settingsOpen && <SettingsBackdrop/>}
                </ImgBackground>
        )
}