import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import ImageManager from 'common/Manager/ImageManager';
import FontManager from 'common/Manager/FontManager';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';

type Props = { seoModel?: SEOModel, tourTotal?: number }

const BannerSection = (props: Props) => {
  return (
    <BannerWrapper>
      <Container>
        <Heading content={props?.seoModel?.tourTitleTH} {...h1Style} />
        <TotalTour>{i18n.t('collective.list.search')} {props?.tourTotal ? props?.tourTotal : '0'} {i18n.t('collective.list.titletour')}</TotalTour>
      </Container>
    </BannerWrapper>
  );
}

const h1Style = {
  as: 'h1',
  color: '#fff',
  // fontSize: ['28px', '28px', '28px', '35px', '35px'],
  fontSize: ['29px', '31px', '35px', '45px', '53px'],
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
  mt: '20px',
  textAlign: 'center'
}

const TotalTour = styled.p`
  color: #fff;
  font-size: 23px;
  margin: 0;
  text-align: center;
`

const BannerWrapper = styled.section`
  align-items: center;
  background-color: #00000040;
  display: flex;
  min-height: 260px;
  padding-top: 40px;
  ::before {
    background-image: url(${ImageManager.default.images.common.BG2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 1279px) {
    min-height: 160px;
    padding-top: 0;
  }
`

export default BannerSection;