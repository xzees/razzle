import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxAbstract, TourCode, TourRating, AbstractContent } from './Desktop.style';
import { StarBorder } from '@material-ui/icons';
import { TourListProps } from './Interface';

const DesktopAbstract = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData } = props;
    const ReplaceAbstract = (abstract: string) => {
      if (abstract.length > 350) {
        return abstract.substring(0, 350) + '...';
      }
      return abstract;
    }

    return (
      <>
        <BoxAbstract>
          <TourCode>{i18n.t('collective.list.tourcode')} : <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">{tourData.tourCode}</a></TourCode>
          {tourData.rating ? (
            <TourRating
              name="tour-rating" value={tourData.rating} max={5}
              emptyIcon={<StarBorder htmlColor="#00000042" fontSize="inherit" />}
              readOnly
            />
          ) : undefined}
        </BoxAbstract>
        {tourData.description ? (
          <AbstractContent>
            {/* <AbstractBox> */}
            <p title={tourData.description}>{ReplaceAbstract(tourData.description)}</p>
            {/* </AbstractBox> */}
          </AbstractContent>
        ) : undefined}
      </>
    )
  })
)

export default DesktopAbstract;