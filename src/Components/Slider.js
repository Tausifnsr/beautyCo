import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const ImageSlider = () => {
  return (
    <Carousel className='carousel' showArrows={true} autoPlay={true} interval={2500} stopOnHover={false} transitionTime={500} infiniteLoop={true} showThumbs={true} showIndicators={false} showStatus={false}>
      <div>
        <img src="../images/carousel9.png" alt="1" />
      </div>
      <div>
        <img src="../images/carousel5.png" alt="2" />
      </div>
      <div>
        <img src="../images/carousel6.png" alt="3" />
      </div>
      <div>
        <img src="../images/carousel7.png" alt="4" />
      </div>
      <div>
        <img src="../images/carousel8.png" alt="5" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
