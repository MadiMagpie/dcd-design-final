import { useRouter } from 'next/router'
import { FirstTutorial, SecondTutorial } from '../../comps/Display/tutorialBoxes';
import { ImgBackground} from '../../comps/Display';
import { LongButton} from '../../comps/Button';


export default function StartSecondTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                        <SecondTutorial></SecondTutorial>
                </ImgBackground>
        )
}