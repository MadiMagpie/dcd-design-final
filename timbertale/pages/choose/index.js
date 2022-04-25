import { LongButton, BackButton, SkipButton, ShortButton } from '../../comps/Button';
// import style from '../styles/global.css'
// Import Swiper React components
import { Card } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FSBackground, Wrapper, Heading, Desc } from "../../comps/Display";
import { useRouter } from 'next/router';

 
// Import Swiper styles
import 'swiper/css';
 
export default () => {

  const r = useRouter();
 return (
   <FSBackground backgroundcolor = "#999529" justifycontent= "space-evenly">
      <BackButton></BackButton>
      <Wrapper> 
        <Heading color = "#FFFAF1" > Choose your forest</Heading>
        <Desc color = "#FFFAF1"> Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals.</Desc>
      </Wrapper>
      <Swiper
        spaceBetween={15}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
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
      <div>
        <LongButton onClick={()=>r.push("/old_growth")}>Start</LongButton>
        <LongButton> How to Play </LongButton>
      </div>
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
