import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { BoxAbstract, AbstractTitle, IconAbstract, h2Style, AbstractTour } from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const MobileAbstract = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;
    return (
      <BoxAbstract id="abstract">
        <AbstractTitle><IconAbstract htmlColor={ColorManager.default.primaryColor} /><Heading content={i18n.t('collective.detail.hilight')} {...h2Style} /></AbstractTitle>
        <AbstractTour>{tourDetail?.description}</AbstractTour>
      </BoxAbstract>
    )
  })
)

export default MobileAbstract;