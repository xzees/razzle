import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { Button } from 'common/components/Button';
import { GridContent, BoxMain, BoxTopDetail, BoxTourItem, PriceTitle, StrikePrice, TourPrice, TourPriceAsk, TourCode, BoxTopButton, BoxShared, BoxSharedButton, ButtonTel, ButtonLine } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { HeadsetMic } from '@material-ui/icons';
import { AppImage } from "common/components";
import ImageManager from "common/Manager/ImageManager";
import FontManager from "common/Manager/FontManager";
import { TourDetailProps } from './Interface';

const DesktopTopButton = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, periodDesktopScroll } = props;
    return (
      <GridContent id={'ButtonTopContent'} key="ButtonTopContent" item xs={12} md={4} >
        <BoxMain>
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
        </BoxMain>
      </GridContent>
    )
  })
)

export default DesktopTopButton;