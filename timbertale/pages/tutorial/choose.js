import { useRouter } from 'next/router'
import { FirstTutorial } from '../../comps/Display/tutorialBoxes';
import { FSBackground} from '../../comps/Display';
import { LongButton} from '../../comps/Button';
import { motion } from "framer-motion";



export default function ChooseForestTutorial(){
        const r = useRouter();
        return (
                <FSBackground backgroundcolor = "#999529" justifycontent = "space-around">
                        <FirstTutorial></FirstTutorial>
                        <LongButton as={motion.div} 
                        initial ={{ scale:0 }} 
                        animate = {{scale:1}} 
                        transiton={{type: "spring", stiffness: 700, damping: 60}}
                        onClick={()=> r.push("/tutorial/start")}
                        >Start</LongButton>
                </FSBackground>
        )
}