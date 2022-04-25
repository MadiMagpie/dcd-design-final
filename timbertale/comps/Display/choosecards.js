import styled from "styled-components";

export const ChooseTitle = styled.h1`
display: flex;
font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #FFFFFF;
  font-size:2em;
`;

export const ChooseInfo = styled.h3`
display: flex;
text-align: center;
width: ${props => props.width || "75%"};
color: #FFFFFF;
font-size: 1em;
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../comps/Display/graphics-svg-jpeg/OldGrowth.jpg'
import Sumatran  from '../../comps/Display/graphics-svg-jpeg/Sumatran.jpg'
import Amazon from '../../comps/Display/graphics-svg-jpeg/amazon.jpg'

import 'swiper/css';
 
export default function SwiperForest () {

  const r = useRouter();
 return (
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
 );
};
