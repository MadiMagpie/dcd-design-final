import { useRouter } from 'next/router'
import { FirstTutorial } from '../../comps/Display/tutorialBoxes';
import { FSBackground} from '../../comps/Display';
import { LongButton} from '../../comps/Button';


export default function ChooseForestTutorial(){
        const r = useRouter();
        return (
                <FSBackground backgroundColor = "#999529">
                        <FirstTutorial></FirstTutorial>
                        <LongButton onClick={()=> r.push("/tutorial/start")}>Start</LongButton>
                </FSBackground>
        )
}