import { useRouter } from 'next/router'
import { ThirdTutorial } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';


export default function StartThirdTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                        <SettingsDark></SettingsDark>
                        <ThirdTutorial></ThirdTutorial>
                </ImgBackground>
        )
}