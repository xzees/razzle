import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import { inject, observer } from 'mobx-react';
import { TourImg } from './Desktop.style';
import { TourDetailProps } from './Interface';
import ColorManager from 'common/Manager/ColorManager';
import Discount from './Discount';

const ImageGallery = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, isMobile } = props;

    const images_url_original: any = [];
    images_url_original.push({
      original: tourDetail.coverImage,
      thumbnail: tourDetail.coverImage,
      alt: tourDetail.title
    })
    for (const a of tourDetail.galleries) {
      images_url_original.push({
        original: a.image,
        thumbnail: a.image,
        alt: `${tourDetail.tourCode}-${a.order}`
      })
    }

    const [nav1, setNav1] = React.useState<any>(null);
    const [nav2, setNav2] = React.useState<any>(null);
    const [slider1, setSlider1] = React.useState<any>(null);
    const [slider2, setSlider2] = React.useState<any>(null);
    React.useEffect(() => { setNav1(slider1); setNav2(slider2); });

    const settingsMain = {
      asNavFor: '.slider-nav',
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };

    const settingsThumbs = {
      arrows: false,
      asNavFor: '.slider-for',
      centerMode: true,
      centerPadding: '10px',
      focusOnSelect: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      // swipeToSlide: true,
      variableWidth: true
    };

    return (
      <SlideWrapper className="slider-wrapper">
        <SlideGallery {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))} >
          {images_url_original?.map((slide: { original: string; alt: string; }, index: any) => (
            <TourImg visibleByDefault key={index} src={slide?.original} alt={slide?.alt} />
          ))}
        </SlideGallery>
        <ThumbsBox className={isMobile === true ? `thumbnail-slider-wrap slide-mobile` : `thumbnail-slider-wrap`}>
          <SlideThumbs {...settingsThumbs} asNavFor={nav1} ref={slider => (setSlider2(slider))} >
            {images_url_original?.map((slide: { original: string; alt: string; }, index: any) =>
              <img key={index} className="thumbnail-image" src={slide?.original} />
            )}
          </SlideThumbs>
        </ThumbsBox>
        {tourDetail.discount ? <Discount tourDiscount={tourDetail.discount} /> : undefined}
      </SlideWrapper>
    )
  })
)

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  .thumbnail-slider-wrap.slide-mobile {
    opacity: 1;
    visibility: visible;
  }
  .thumbnail-slider-wrap.slide-mobile .slick-track {
    left: -40%;
  }
  :hover {
    .thumbnail-slider-wrap {
      opacity: 1;
      visibility: visible;
    }
  }
`
const SlideGallery = styled(Slider)`
  .slick-prev {
    left: 5px;
  }
  .slick-next {
    right: 5px;
  }
  .slick-prev, .slick-next {
    z-index: 4;
  }
  .slick-slide img {
    display: block !important;
  }
`

const ThumbsBox = styled.div`
  background: #00000080;
  border-radius: 0 0 6px 6px;
  bottom: 0px;
  height: 50px;
  padding: 5px 0px;
  position: absolute;
  transition: all .3s ease;
  width: 100%;
  transition: visibility 0s, opacity 0.3s linear;
  @media(min-width: 960px) {
    opacity: 0;
    visibility: hidden;
  }
`
const SlideThumbs = styled(Slider)`
  .slick-track {
    left: -42%;
  }
  .slick-slide {
    margin-bottom: -5px;
    margin-right: 5px;
  }
  .slick-slide img {
    border: 1px solid ${ColorManager.default.transparent};
    width: 60px !important;
  }
  .slick-slide.slick-cloned {
    display: none;
  }
  .slick-active.slick-center.slick-current img {
    border: 1px solid ${ColorManager.default.white};
  }
`

export default ImageGallery;