import { LongButton, BackButton, SkipButton, ShortButton, } from '../../comps/Button';
import { ChooseTitle, ChooseInfo } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FSBackground, Heading, Wrapper, RowWrapper} from "../../comps/Display";
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../public/OldGrowth.jpg'
import Sumatran  from '../../public/Sumatran.jpg'
import Amazon from '../../public/Amazon.jpg'
import { SettingsBackdrop, SetButton, SettingsModal } from '../../comps/Settings';
import 'swiper/css';
import { useState } from 'react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
 
export default () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const r = useRouter();

  function settingsHandler(){
    setSettingsOpen(true);
  }
  function closeSettingsHandler(){
    setSettingsOpen(false);
  }

 return (
   <div style={{background:"#999529", height:"100vh"}}>
     <FSBackground backgroundcolor = "#999529" height = "auto">
      <BackButton onClick={()=>r.back}></BackButton>
      <SetButton onClick = {settingsHandler}><img src='/settingswhite.svg'/></SetButton>
    <Wrapper margintop="4em" marginbottom = "3em">
      <Heading color="#FFFFFF">Select Your Forest</Heading>
      <ChooseInfo>Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</ChooseInfo>
    </Wrapper></FSBackground>
    {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
    {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
   <Swiper
     spaceBetween={10}
     slidesPerView={3}
     centeredSlides={true}
     loop={true}
     grabCursor={true}
     navigation={true}
     pagination={{dynamicBullets:true,}}
     modules={[Pagination, Navigation]}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
     className="mySwiper"
 >  
    <SwiperSlide>

     <Image src={OldGrowth}
       alt='oldGrowth'
       width={300}
       height={600}
      />
      <ShortButton marginleft={"10px"} onClick={()=>r.push("/old_growth")}>Start</ShortButton>
     </SwiperSlide>
     <SwiperSlide>
       <Image src={Amazon}
       alt='amazon'
       width={300}
       height={600}
      />
      <ShortButton marginleft={"10px"} onClick={()=>r.push("/Amazon")}>Start</ShortButton>
     </SwiperSlide>
     <SwiperSlide>
      <Image src={Sumatran} 
       alt='Sumatran'
       width={300}
       height={600}
        />
        <ShortButton marginleft={"10px"} onClick={()=>r.push("/Sumatran")}>Start</ShortButton>
     </SwiperSlide>
   </Swiper>
  
</div>
 );
};