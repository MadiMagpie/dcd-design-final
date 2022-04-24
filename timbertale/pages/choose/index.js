import { useRouter } from 'next/router';
import { FSBackground, Heading, Wrapper, Desc, } from '../../comps/Display';
import { BackButton, LongButton} from '../../comps/Button';
import { CorrectTutorialCard } from '../../comps/Tutorial/IconCard';

export default function ChooseForest(){
        const r = useRouter();
        return(
                <FSBackground backgroundcolor = "#999529" justifycontent="space-evenly"> 
                        <BackButton></BackButton>
                        <Wrapper> 
                                <Heading color = "#FFFAF1" > Choose your forest</Heading>
                                <Desc color = "#FFFAF1"> Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</Desc>
                        </Wrapper>
                        <div> 
                                <LongButton> Start </LongButton>
                                <LongButton> How to Play </LongButton>
                        </div>
                </FSBackground>
        )
}