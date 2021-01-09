import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import activities from 'modules/package/data/activities.json';
import Item from './Item';
import {
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  ArrowButton,
  ItemWrapper,
} from './Style';

type Props = {
  isMobile: boolean;
};

const NearbyDestinations: FunctionComponent<Props> = ({ isMobile }) => {
  const items = _.drop(activities);

  const PrevArrow = (props: any) => {
    return (
      <ArrowButton
        top={isMobile ? '-73px' : '-62px'}
        right="50px"
        onClick={props.onClick}
      >
        <KeyboardArrowLeftIcon />
      </ArrowButton>
    );
  };

  const NextArrow = (props: any) => {
    return (
      <ArrowButton
        top={isMobile ? '-73px' : '-62px'}
        right="0px"
        onClick={props.onClick}
      >
        <KeyboardArrowRightIcon />
      </ArrowButton>
    );
  };

  const settingsSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settingsSlider}>
      {_.map(items, (item: any, index: number) => {
        return (
          <ItemWrapper
            pl={isMobile ? '5px' : '10px'}
            pr={isMobile ? '5px' : '10px'}
          >
            <Item item={item} test={index} isMobile={isMobile} />
          </ItemWrapper>
        );
      })}
    </Slider>
  );
};

export default NearbyDestinations;
