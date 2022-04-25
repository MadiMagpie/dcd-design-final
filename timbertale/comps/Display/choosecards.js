import styled from "styled-components";

export const ChooseTitle = styled.h1`
display: flex;
font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #FFFFFF;
`;

export const ChooseInfo = styled.h3`
display: flex;
text-align: center;
width: 50vw;
color: #FFFFFF;
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../public/OldGrowth.jpg'
import Sumatran  from '../../public/Sumatran.jpg'
import Amazon from '../../public/amazon.jpg'

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
