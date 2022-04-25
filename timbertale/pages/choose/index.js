import { LongButton, BackButton, SkipButton, ShortButton } from '../../comps/Button';
import { ChooseTitle, ChooseInfo } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FSBackground } from "../../comps/Display";
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../comps/Display/graphics-svg-jpeg/OldGrowth.jpg'
import Sumatran  from '../../comps/Display/graphics-svg-jpeg/Sumatran.jpg'
import Amazon from '../../comps/Display/graphics-svg-jpeg/amazon.jpg'

import 'swiper/css';
 
export default function SwiperTrees () {

  const r = useRouter();
 return (
   <FSBackground backgroundColor = "#999529">
     <BackButton onClick={()=>r.back}></BackButton>
     <div onClick={()=>r.push("/settingstest")}>Settings</div>
   <ChooseTitle>Select Your Forest</ChooseTitle>
   <ChooseInfo>Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</ChooseInfo>
   <Swiper
     spaceBetween={10}
     slidesPerView={'auto'}
     centeredSlides={true}
     loop={true}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   >
     <SwiperSlide style={{width: "30%"}}>
       <Image src={Amazon}
       alt='amazon'
       width={300}
       height={500}
      />
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>
     <Image src={OldGrowth}
       alt='oldGrowth'
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
   </FSBackground>
 );
};