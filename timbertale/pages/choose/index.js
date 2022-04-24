import { LongButton, BackButton, SkipButton, ShortButton } from '../../comps/Button';
// import style from '../styles/global.css'
// Import Swiper React components
import { Card } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FSBackground } from "../../comps/Display";
import { useRouter } from 'next/router';

 
// Import Swiper styles
import 'swiper/css';
 
export default () => {

  const r = useRouter();
 return (
   <FSBackground backgroundColor = "#999529">
   <Swiper
     spaceBetween={15}
     slidesPerView={'auto'}
     centeredSlides={true}
     loop={true}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   >
     <SwiperSlide style={{width: "30%"}}>Slide 1
       <Card> Hello </Card>
       <div>I will make big</div>
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>Slide 2
       <Card>2</Card>
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>Slide 3
     <Card>2</Card>
     </SwiperSlide>
 
   </Swiper>

   <LongButton onClick={()=>r.push("/old_growth")}>Start</LongButton>
   </FSBackground>
 );
};


// export default function Home() {
//     const r = useRouter();
  
//     return (
//       <FSBackground backgroundColor = "#999529">
//         <BackButton onClick = {()=> r.push("../")}></BackButton>
      
//         <Slider>
//         <Card>
//             Img
//         </Card>
//         <Card>
//             Img2
//         </Card>
//         <Card>
//             img3
//         </Card>
//         </Slider>
//           <LongButton>Start</LongButton>
//       </FSBackground>
//     )
//   }
