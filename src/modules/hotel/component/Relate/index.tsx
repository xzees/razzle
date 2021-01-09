import React, { useState, useEffect, useRef } from 'react'
import Item from './item'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Slider from "react-slick";
import _ from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores'

interface IRelateHotel {
    hotel_main_photo: string,
    name: string,
    class: number,
    city_name: string,
    rating: number,
    rating_count: number,
    price_remove: number,
    price: number,
    remain: number,
    discount: number,
    promotion: number,
    randomMock: string
}


const buttonStyle:React.CSSProperties = { display: "block", position: "absolute", top: "-45px", padding: "6px", background: ColorManager.default.white, color: ColorManager.default.fifthColor, width: "40px", height: "40px", fontSize: FontManager.default.TEXT_EXTRA_24, borderRadius: "4px"}
const buttonNextStyle:React.CSSProperties = { right: "6px" };
const buttonBackStyle:React.CSSProperties = { right: "54px"};

interface Props { 
  stores?: RootStore
  [key: string]: any
}

const index = inject('stores')(
  observer((props: Props) => {
    const { isMobile } = props;
    const uiStore = props.stores!.HotelRootStore.RelatedStore;
    
    const NextArrow = (props:any) => {
      const { className, style, onClick } = props;
      return (
        <IconButton aria-label="next" 
        style={{ ...buttonStyle, ...buttonNextStyle}}
        onClick={onClick}>
          <KeyboardArrowRightIcon />
        </IconButton>
      );
    }
    
    const PrevArrow = (props:any) => {
      const { className, style, onClick } = props;
      return (
        <IconButton aria-label="back" 
        style={{ ...buttonStyle, ...buttonBackStyle}}
        onClick={onClick}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      );
    }

    const settingsSlider = {
        dots: false,
        infinite: true,
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
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
    };

    return (
        <div style={{marginLeft: -8, marginRight: -8}}>
            <Slider {...settingsSlider}>
            {
                uiStore.getRelated.map((item, i) => { 
                    return (<div><Item  {...props} isMobile={isMobile} hotel={item} key={i}></Item></div>)
                })
            }
            </Slider>
        </div>
    );
  }))

export default index;
