import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxButton, ViewButton } from './Mobile.style';
import { TourListProps } from './Interface';

const MobileResv = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData } = props;

    return (
      <BoxButton>
        <ViewButton href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">{i18n.t('collective.list.button.view')}</ViewButton>
      </BoxButton>
    )
  })
)

export default MobileResv;