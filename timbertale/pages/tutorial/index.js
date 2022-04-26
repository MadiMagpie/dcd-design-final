import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'
import { BackButton, SkipButton, ShortButton, SettingsLight } from '../../comps/Button';
import { FSBackground, Box, Wrapper } from '../../comps/Display';
import { WelcomeTutorial } from '../../comps/Tutorial/Welcome';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";

export default function StartTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
      }
        const r = useRouter();

        return (
                <FSBackground>
                        <BackButton></BackButton>
                        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <WelcomeTutorial></WelcomeTutorial>
                        {settingsOpen && <SettingsModal/>}
        {settingsOpen && <SettingsBackdrop/>}
                </FSBackground>
        )
}