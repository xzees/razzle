import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { Button } from 'common/components/Button';
import { BoxMainRight, BoxTopDetail, BoxTourItem, PriceTitle, StrikePrice, TourPrice, TourPriceAsk, TourCode, RRatingLabel, RTourRating, BoxTopButton, BoxShared, BoxSharedButton, ButtonTel, ButtonLine } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { StarBorder, HeadsetMic } from '@material-ui/icons';
import { AppImage } from "common/components";
import ImageManager from "common/Manager/ImageManager";
import FontManager from 'common/Manager/FontManager';
import { TourDetailProps } from './Interface';
import DesktopGroupButton from './DesktopGroupButton';

const DesktopRightBox = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, periodDesktopScroll } = props;

    const handleScroll = () => {
      const windowsScrollTop = window.pageYOffset;
      const buttonTop: any = document.getElementById("ButtonTopContent");
      const buttonTopScroll = buttonTop?.offsetTop + buttonTop?.offsetHeight;
      const rightContent: any = document.getElementById('rightContent');
      if (windowsScrollTop > buttonTopScroll) {
        rightContent.style.opacity = '1';
        rightContent.style.transition = 'height 0ms 0ms, opacity 600ms 0ms';
        rightContent.style.visibility = 'unset';
      } else {
        rightContent.style.opacity = '0';
        rightContent.style.transition = 'height 0ms 400ms, opacity 400ms 0ms';
        rightContent.style.visibility = 'hidden';
      }
    };

    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleResize = () => {
      const windowsWidth = window.innerWidth;
      const rightContent: any = document.getElementById('rightContent');
      if (windowsWidth <= 991) {
        rightContent.style.display = 'none';
      } else {
        rightContent.style.display = 'block';
      }
    };

    React.useEffect(() => {
      var windowsWidth = window.innerWidth;
      var rightContent: any = document.getElementById('rightContent');
      if (windowsWidth <= 991) {
        rightContent.style.display = 'none';
      } else {
        rightContent.style.display = 'block';
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    });

    return (
      <BoxMainRight id={'rightContent'} style={{ opacity: '0' }}>
        <BoxTopDetail>
          <BoxTourItem>
            <PriceTitle>{i18n.t('collective.detail.price.title')}</PriceTitle>
            {tourDetail.discount
              ? <><StrikePrice>{tourDetail.discount.normalPrice.toLocaleString()}</StrikePrice><Heading content={`${tourDetail.discount.salePrice.toLocaleString()} ${i18n.t('collective.detail.currency')}`} {...TourPrice} /></>
              : tourDetail.minPrice > 0
                ? <Heading content={`${tourDetail.minPrice.toLocaleString()} ${i18n.t('collective.detail.currency')}`} {...TourPrice} />
                : <Heading content={i18n.t('collective.detail.price.ask')} {...TourPriceAsk} />
            }
          </BoxTourItem>
          <BoxTourItem>
            <TourCode>{i18n.t('collective.detail.tourcode')} {tourDetail?.tourCode}</TourCode>
          </BoxTourItem>
          {tourDetail.rating ? (
            <BoxTourItem>
              <RRatingLabel>{i18n.t('collective.detail.tourrating')}</RRatingLabel>
              <RTourRating
                name="tour-rating" value={tourDetail.rating} max={5}
                emptyIcon={<StarBorder htmlColor="#00000042" fontSize="inherit" />}
                readOnly
              />
            </BoxTourItem>
          ) : undefined}
        </BoxTopDetail>
        <BoxTopButton>
          <BoxShared>
            <BoxSharedButton>
              <ButtonTel variant="contained" startIcon={<HeadsetMic />} href="tel:021719999" >{i18n.t('collective.detail.book.tel')}</ButtonTel>
            </BoxSharedButton>
            <BoxSharedButton>
              <ButtonLine variant="contained" startIcon={<AppImage visibleByDefault src={ImageManager.default.images.common.toggleMenu.lineIcon} />} href="http://line.me/ti/p/@thaitravelcenter" >
                {i18n.t('collective.detail.book.line')}
              </ButtonLine>
            </BoxSharedButton>
          </BoxShared>
          <Button background={ColorManager.default.primaryColor} fontSize="1.6875rem" fontFamily={FontManager.default.secondaryFont} onClick={periodDesktopScroll} >{i18n.t('collective.detail.book.now')}</Button>
        </BoxTopButton>
        <DesktopGroupButton tourDetail={tourDetail} />
      </BoxMainRight>
    )
  })
)

export default DesktopRightBox;