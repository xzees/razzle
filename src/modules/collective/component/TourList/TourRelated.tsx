import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import { AppImage } from 'common/components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';
import Slider from "react-slick";

type Props = { tourRelated?: any[]; totalRelated?: number; linkMenu: string }

const TourRelated = (props: Props) => {
  const {
    tourRelated,
    totalRelated,
    linkMenu
  } = props;

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1219,
        settings: { slidesToShow: 3, slidesToScroll: 3 }
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      {
        breakpoint: 511,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <ContRelated>
      <Heading content={i18n.t('collective.list.related.title')} {...h2Style} />
      <SliderRelated {...settings}>
        {tourRelated?.map(tourData => (
          <TourItem key={tourData.tourID}>
            <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">
              <TourImg>
                <TourImgLazy src={tourData?.coverImage} alt={tourData?.title} title={tourData?.title} />
              </TourImg>
              <TourName title={tourData.title}>{tourData.title}</TourName>
              <TourDesc>
                <TourAirLogo>
                  <AirImgLazy src={tourData?.airline?.airlineLogo} title={tourData?.airline?.airlineName} />
                </TourAirLogo>
                <TourPrice>
                  <PriceTitle>{i18n.t('collective.list.price.title')}</PriceTitle>
                  <Price>{`฿ ${tourData.minPrice.toLocaleString()}`}</Price>
                </TourPrice>
              </TourDesc>
            </a>
          </TourItem>
        ))}
      </SliderRelated>
    </ContRelated>
  );
}
const ContRelated = styled(Container)`
  margin-bottom: 30px;
  @media(max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px
  }
`;
const h2Style = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontSize: ['25px', '29px'],
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '15px',
  mt: '0'
}
const SliderRelated = styled(Slider)`
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:before {
    font-size: 12px;
  }
  .slick-dots li.slick-active button:before {
    opacity: .9;
    color: ${ColorManager.default.primaryColor};
  }
`;
const TourItem = styled.div`
  box-shadow: 0 0 4px -1px rgba(0,0,0,.25);
  border-radius: 8px;
  margin: 5px;
  margin-bottom: 10px;
  position: relative;
  width: 97% !important;
`;
const TourImg = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  overflow: hidden;
`;
const TourImgLazy = styled(AppImage)`
  height: 200px;
  image-rendering: auto;
  object-fit: cover;
  width: 100%;
  @media(max-width: 280px) {
    height: 150px;
  }
`;
const TourName = styled.div`
  background: ${ColorManager.default.primaryColor};
  color: ${ColorManager.default.white};
  display: block;
  display: -webkit-box;
  font-size: 22px;
  height: 56px;
  line-height: 1;
  margin-top: -6px;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media(max-width: 280px) {
    font-size: 20px;
    line-height: 1;
    height: 50px;
  }
`;
const TourDesc = styled.div`
  background: ${ColorManager.default.white};
  border-radius: 0 0 8px 8px;
  min-height: 65px;
  padding: 8px 5px;
  @media(max-width: 280px) {
    min-height: 60px;
  }
`;
const TourAirLogo = styled.div`
  margin-top: 5px;
  max-width: 110px;
  @media(max-width: 280px) {
    max-width: 90px;
  }
`;
const AirImgLazy = styled(AppImage)`
  height: auto;
  image-rendering: auto;
  max-width: 100%;
`;
const TourPrice = styled.div`
  bottom: 0;
  color: ${ColorManager.default.greenColor};
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: right;
`;
const PriceTitle = styled.span`
  color: #999;
  font-size: 19px;
  line-height: 27px;
  @media(max-width: 280px) {
    font-size: 15px;
    line-height: 24px;
  }
`;
const Price = styled.span`
  display: block;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 46px;
  line-height: 0.5;
  letter-spacing: -1px;
  @media(max-width: 280px) {
    font-size: 40px;
  }
`;

export default TourRelated;