import { useRouter } from 'next/router'
import { TutLives } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import Base from '../../comps/Base';
import { LivesArrow } from '../../comps/Tutorial/arrows';

export default function StartThirdTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                    <Base></Base>
                  
                    <SettingsDark></SettingsDark>
                        <TutLives></TutLives>
                        <LivesArrow>  <img src='/greenarrow.svg'/></LivesArrow>
                </ImgBackground>
        )
}