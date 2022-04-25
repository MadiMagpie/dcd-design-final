import { useRouter } from 'next/router'
import { FirstTutorial } from '../../comps/Tutorial/TextCard';
import { FSBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import { motion, SwitchLayoutGroupContext } from "framer-motion";
import SwiperForest from '../../comps/Display/choosecards';


export default function ChooseForestTutorial(){
        const r = useRouter();
        return (
                <FSBackground backgroundcolor = "#999529" justifycontent = "space-around">
                        <SettingsDark></SettingsDark>
                        <FirstTutorial></FirstTutorial>
                        <SwiperForest></SwiperForest>
                        <LongButton as={motion.div} 
                        initial ={{ scale:0 }} 
                        animate = {{scale:1}} 
                        transiton={{type: "spring", stiffness: 700, damping: 60}}
                        onClick={()=> r.push("/tutorial/start")}
                        >Start</LongButton>
                </FSBackground>
        )
}