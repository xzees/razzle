import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxAbstract, TourCode, TourRating, ShowAbstract, AbstractContent } from './Mobile.style';
import { StarBorder } from '@material-ui/icons';
import { TourListProps } from './Interface';

const MobileAbstract = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index,
      openQuestion,
      selectedQuestion
    } = props;

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
          {tourData.description ? (
            <ShowAbstract className={`abstract-label${selectedQuestion === index ? ' open' : ''}`} onClick={() => openQuestion(index)}>{i18n.t('collective.list.highlight')}</ShowAbstract>
          ) : undefined}
        </BoxAbstract>
        {tourData.description ? (
          <AbstractContent>
            <div className={`abstract-content${selectedQuestion === index ? ' open' : ''}`}>
              <span id={`abstract-${tourData.tourID}`}>{tourData.description}</span>
            </div>
          </AbstractContent>
        ) : undefined}
      </>
    )
  })
)

export default MobileAbstract;