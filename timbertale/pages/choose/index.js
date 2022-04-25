import { LongButton, BackButton, SkipButton, ShortButton, } from '../../comps/Button';
import { ChooseTitle, ChooseInfo } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LearnBackground, Heading, Wrapper, RowWrapper} from "../../comps/Display";
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../public/OldGrowth.jpg'
import Sumatran  from '../../public/Sumatran.jpg'
import Amazon from '../../public/Amazon.jpg'
import { SettingsBackdrop, SetButton, SettingsModal } from '../../comps/settings';
import 'swiper/css';
import { useState } from 'react';
 
export default () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const r = useRouter();

  function settingsHandler(){
    setSettingsOpen(true);
}

 return (
   <LearnBackground backgroundcolor = "#999529">
    <RowWrapper marginbottom = "2em" margintop = "0">
      <BackButton onClick={()=>r.back}></BackButton>
      <SetButton onClick = {settingsHandler}><img src='/settingswhite.svg'/></SetButton>
    </RowWrapper>
    <Wrapper>
      <Heading color="#FFFFFF">Select Your Forest</Heading>
      <ChooseInfo>Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</ChooseInfo>
    </Wrapper>
    {settingsOpen && <SettingsModal/>}
    {settingsOpen && <SettingsBackdrop/>}
   <Swiper
     spaceBetween={10}
     slidesPerView={'auto'}
     centeredSlides={true}
     loop={true}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
 >  
    <SwiperSlide style={{width: "30%"}}>
     <Image src={OldGrowth}
       alt='oldGrowth'
       width={300}
       height={500}
      />
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>
       <Image src={Amazon}
       alt='amazon'
       width={300}
       height={500}
      />
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>
      <Image src={Sumatran} 
       alt='Sumatran'
       width={300}
       height={500}
        />
     </SwiperSlide>
   </Swiper>
  
   <LongButton onClick={()=>r.push("/old_growth")}>Start</LongButton>
   <LongButton onClick={()=>r.push("/howto")}>How to play</LongButton>
   </LearnBackground>
 );
};