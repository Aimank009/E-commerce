import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';

const items = mainCarouselData.map((item)=><img className='cursor-pointer' 
        role='presentation' src={item.image} alt=''/>)
const MainCarosel = () => (
    // const navigate=useNavigate
   
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarosel;