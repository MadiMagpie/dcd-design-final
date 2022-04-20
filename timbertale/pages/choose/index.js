import "typeface-poppins";
import "typeface-signika";
import { useRouter } from 'next/router'
import { LongButton, BackButton, SkipButton, ShortButton } from '../../comps/Button';
import { Card, Slider } from "../../comps/Display/choosecards";
import { FSBackground } from "../../comps/Display";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function SideSwiper(){
    
return (
    <Swiper
        className={styles.mySwiper}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/dribble-mockup.png'}
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <div> img </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <div>Img2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <div>Img3</div>
          </div>
        </SwiperSlide>
      </Swiper>
)
}


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