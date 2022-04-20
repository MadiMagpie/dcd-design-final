import { useRouter } from 'next/router';
import { FSBackground, Heading, Wrapper} from '../../comps/Display';
import { BackButton, LongButton} from '../../comps/Button';


export default function ChooseForest(){
        const r = useRouter();
        return(
                <FSBackground backgroundcolor = "#999529"> 
                        <BackButton></BackButton>
                        <Wrapper> 
                                <Heading color = "#FFFAF1" > Choose your forest</Heading>
                                <p> Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</p>
                                <LongButton> Start </LongButton>
                                <LongButton> How to Play </LongButton>
                        </Wrapper>
                </FSBackground>
        )
}