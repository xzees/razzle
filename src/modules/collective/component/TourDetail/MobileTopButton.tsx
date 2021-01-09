import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Button } from 'common/components/Button';
import { BoxTopButton, BoxShared, BoxSharedButton, ButtonTel, ButtonLine } from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import { HeadsetMic } from '@material-ui/icons';
import { AppImage } from "common/components";
import ImageManager from "common/Manager/ImageManager";
import FontManager from 'common/Manager/FontManager';
import { TourDetailProps } from './Interface';

const MobileTopButton = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, periodMobileScroll } = props;
    return (
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
        <Button background={ColorManager.default.primaryColor} fontSize="1.6875rem" fontFamily={FontManager.default.secondaryFont} height="49px" onClick={periodMobileScroll} >{i18n.t('collective.detail.book.now')}</Button>
      </BoxTopButton>
    )
  })
)

export default MobileTopButton;