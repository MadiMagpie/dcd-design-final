import styled from "styled-components";
// import Swiper from 'swiper';
// import 'swiper/css';

// const swiper = new Swiper(".swiper", {
//     direction: 'vertical',
//     loop: true,
    
//     pagination: {
//         el: '.swiper-pagination',
//     }
// })

// export function SideSwiper(){
//     return (
//         <div class="swiper">
//             <div class="swiper-wrapper">
//                 <div class="swiper-slider">Slider 1</div>
//                 <div class="swiper-slider">Slider 2</div>
//                 <div class="swiper-slider">Slider 3</div>
//             </div>
//         </div>
//     )
// }

export const Card = styled.div `
background: #FFFAF1;
display: flex;
border-radius:25px; 
max-width: 750px;
width: 100px;
flex-direction: column;
align-items: center;
margin: 15% 5%;
padding: 10%
`;

export const Slider = styled.div`
max-width: 75%;
display: flex;
flex-direction: row;
justify-content: center;
`