import _ from 'lodash';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow, ImageWrapper, Image } from './Style';

type Props = {
  photos: any[];
  index: number;
  nav?: Slider;
  setNav: (nav?: Slider) => void;
};

const Slide: FunctionComponent<Props> = (props: Props) => {
  const { photos, index, nav, setNav } = props;

  const [slider, setSlider] = useState<Slider>();

  useEffect(() => {
    setNav(slider);
  }, [slider]);

  const settingsSlider = {
    fade: true,
    centerPadding: '0px',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
    speed: 500,
    asNavFor: nav,
    ref: (slider: Slider) => setSlider(slider),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <style jsx>
        {`
          .slick-slide img {
            margin-left: auto;
            margin-right: auto;
          }
          .slick-slide.slick-active.slick-current img.tumb {
            border: 2px solid white;
            opacity: 1;
          }
        `}
      </style>
      <Slider {...settingsSlider}>
        {_.map(photos, (photo: any) => {
          return (
            <ImageWrapper>
              <Image
                src={_.find(photo?.urls || [], { sizeType: 'RAW' })?.resource}
                alt=""
              />
            </ImageWrapper>
          );
        })}
      </Slider>
    </>
  );
};

export default Slide;
