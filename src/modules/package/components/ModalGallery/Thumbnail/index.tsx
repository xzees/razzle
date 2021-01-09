import _ from 'lodash';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ImageWrapper, Image } from './Style';

type Props = {
  photos: any[];
  index: number;
  nav?: Slider;
  setNav: (nav?: Slider) => void;
};

const Thumbnail: FunctionComponent<Props> = (props: Props) => {
  const { photos, index, nav, setNav } = props;

  const [slider, setSlider] = useState<Slider>();

  useEffect(() => {
    setNav(slider);
  }, [slider]);

  const settingsSlider = {
    arrows: false,
    centerMode: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 3,
    initialSlide: index,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: nav,
    ref: (slider: Slider) => setSlider(slider),
  };

  return (
    <Slider {...settingsSlider}>
      {_.map(photos, (photo: any) => {
        return (
          <ImageWrapper>
            <Image
              className="tumb"
              src={_.find(photo?.urls || [], { sizeType: 'RAW' })?.resource}
              alt=""
            />
          </ImageWrapper>
        );
      })}
    </Slider>
  );
};

export default Thumbnail;
