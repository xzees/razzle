import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxTourCode, TourCode, TourRating } from './Mobile.style';
import { StarBorder } from '@material-ui/icons';
import { TourDetailProps } from './Interface';

const MobileCodeRating = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;
    return (
      <BoxTourCode>
        <TourCode>{i18n.t('collective.detail.tourcode')} : {tourDetail.tourCode}</TourCode>
        {tourDetail.rating ? (
          <TourRating
            name="tour-rating" value={tourDetail.rating} max={5}
            emptyIcon={<StarBorder htmlColor="#00000042" fontSize="inherit" />}
            readOnly
          />
        ) : undefined}
      </BoxTourCode>
    )
  })

)

export default MobileCodeRating;