import { useRouter } from 'next/router'
import { SecondTutorial } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';


export default function StartSecondTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                        <SettingsDark></SettingsDark>
                        <SecondTutorial></SecondTutorial>
                </ImgBackground>
        )
}