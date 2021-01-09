import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { TourListResultBox, ContainerTour, ResultBar, ResultBarH1, TotalTour } from './Mobile.style';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import SkelMobFBar from '../Skeleton/TourList/SkelMobFBar';
import SkelMobSBar from '../Skeleton/TourList/SkelMobSBar';
import FilterBar from '../FliterBar';

type Props = {
  seoTour: SEOModel;
  tourTotal: number;
  handleSort: any;
  tourFilter: any;
  sortBy?: string;
  isMobile?: boolean;
}

const MobileTop = inject("stores")(
  observer((props: Props) => {
    const {
      seoTour,
      tourTotal,
      handleSort,
      tourFilter,
      sortBy,
      isMobile
    } = props;

    return (
      <>
        <TourListResultBox>
          <ContainerTour>
            <ResultBar >
              {seoTour?.tourTitleTH ? (<Heading content={seoTour?.tourTitleTH} {...ResultBarH1} />) : (<SkelMobFBar />)}
              {tourTotal >= 0 ? (<TotalTour>{i18n.t('collective.list..mobile.search')} {tourTotal ? tourTotal : '0'} {i18n.t('collective.list.mobile.titletour')}</TotalTour>) : (<SkelMobSBar />)}
            </ResultBar>
          </ContainerTour>
        </TourListResultBox>
        <FilterBar
          {...props}
        />
      </>
    )
  })
)

export default MobileTop