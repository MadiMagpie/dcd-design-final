import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'
import { BackButton, SkipButton, ShortButton } from '../../comps/Button';
import { FSBackground, Box, Wrapper } from '../../comps/Display';
import { FinishTutorial} from '../../comps/Tutorial/Finish';

export default function FinishedTutorial(){
        const r = useRouter();

        return (
                <FSBackground>
                        <FinishTutorial></FinishTutorial>
                </FSBackground>
        )
}