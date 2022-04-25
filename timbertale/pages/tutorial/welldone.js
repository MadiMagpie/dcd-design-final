import { useRouter } from 'next/router'
import { WellDone } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import Base from '../../comps/Base';

export default function StartThirdTutorial(){
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                    <Base></Base>
                        <SettingsDark></SettingsDark>
                        <WellDone></WellDone>
                </ImgBackground>
        )
}