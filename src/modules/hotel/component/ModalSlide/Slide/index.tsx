import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import {
    RenderNext,
    RenderPrev
} from 'modules/hotel/component/Icon'
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';

export const ImgMain = styled.img`
    image-rendering: auto;
    max-height: 400px;
`
export const ImgTumb = styled.img`
    image-rendering: auto;
    width: auto;
    width: 90px;
    height: 60px;
    cursor: pointer;
    object-fit: cover !important;
    margin-left: 8px !important;
    margin-right: 8px !important;
    opacity: 0.5;
    :hover {
        opacity: 1;
        border: 2px solid white;
    }
`
export const ImgDiv = styled.div`
    max-width: 100%;
    max-height: 100%;
    justify-content: center;
    position: relative;
    display: flex !important;
    align-items: center;
    height: 400px;
`

export const Tumbnail = (props: any) => {

    const [slider2, setSlider2] = React.useState<any>(null);

    React.useEffect(() => { 
        props.setNav2(slider2); 
    });

    const settingsMain = {
        arrows: false,
        centerMode: true,
        speed: 500,
        variableWidth: true,
    };

    return (
        <>
            <Slider
                {...settingsMain}
                lazyLoad={'ondemand'}
                asNavFor={props.nav1}
                ref={(slider: any) => {
                    setSlider2(slider)
                }}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {props.data.map((v: HotelPhotoModelInterface)=> {
                    return (
                        <div>
                            <ImgTumb className={'tumb'} src={v.urlMax300} />
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export const Slide = (props: any) => {
    
    const settingsMain = {
        fade: true,
        centerPadding: "0px",
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    };

    const [slider1, setSlider1] = React.useState<any>(null);

    React.useEffect(() => { 
        props.setNav1(slider1); 
    });

    return (
        <>
            <style jsx={true}>{`
                .slick-slide img { margin-left: auto; margin-right: auto; }
                .slick-slide.slick-active.slick-current img.tumb {
                    border: 2px solid white;
                    opacity: 1;
                }
            `}</style>
            <Slider
                {...props}
                lazyLoad={"ondemand"}
                {...settingsMain}
                asNavFor={props.nav2}
                ref={(slider: any) => {
                    setSlider1(slider)
                }}
                prevArrow={<RenderPrev />}
                nextArrow={<RenderNext />}
            >
                {props.data.map((v: HotelPhotoModelInterface)=> {
                    return (
                        <ImgDiv>
                            <ImgMain src={v.urlOriginal} />
                        </ImgDiv>
                    )
                })}
               
            </Slider>
        </>
    )
}