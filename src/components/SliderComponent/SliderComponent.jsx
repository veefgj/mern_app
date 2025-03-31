import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd';
import { WrapperSliderStyle } from './style';

const SliderComponent = ({arrImages}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

  return (
    <WrapperSliderStyle {...settings}>
        {arrImages.map((image) =>{
            return (
                <Image src={image} alt='sliderne' preview={false} width="100%" height="274px"/>
            )
        })}
    </WrapperSliderStyle>
  )
}

export default SliderComponent