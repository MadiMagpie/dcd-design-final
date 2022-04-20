import { useRouter } from 'next/router'
import { FirstTutorial, SecondTutorial, ThirdTutorial } from '../../comps/Display/tutorialBoxes';
import { ImgBackground} from '../../comps/Display';
import { LongButton} from '../../comps/Button';


export default function StartThirdTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                        <ThirdTutorial></ThirdTutorial>
                </ImgBackground>
        )
}