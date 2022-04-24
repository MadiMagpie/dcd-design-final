import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'
import { BackButton, SkipButton, ShortButton } from '../../comps/Button';
import { FSBackground, Box, Wrapper } from '../../comps/Display';
import { WelcomeTutorial } from '../../comps/Tutorial/Welcome';

export default function StartTutorial(){
        const r = useRouter();

        return (
                <FSBackground>
                        <BackButton></BackButton>
                        <WelcomeTutorial></WelcomeTutorial>
                </FSBackground>
        )
}