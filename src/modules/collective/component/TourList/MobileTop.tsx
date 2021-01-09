import React from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import Parampath from 'common/models/Parampath';
import { TourListFilterBox, ContainerTour, FilterBox, ResultBar, ResultBarH1, TotalTour, FilterBar, SelectSort, } from './Mobile.style';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import SkelMobFBar from '../Skeleton/TourList/SkelMobFBar';
import SkelMobSBar from '../Skeleton/TourList/SkelMobSBar';

type Props = {
  [key: string]: any;
  stores?: RootStore;
  match?: Parampath;
  tourCode?: string;
  seoTour: SEOModel;
  tourTotal: number;
  handleSort: any;
}

const MobileTop = inject("stores")(
  observer((props: Props) => {
    const {
      seoTour,
      tourTotal,
      handleSort,
      sortBy
    } = props;

    return (
      <TourListFilterBox>
        <ContainerTour>
          <FilterBox container>
            <Grid item xs={6} >
              <ResultBar >
                {seoTour?.tourTitleTH ? (<Heading content={seoTour?.tourTitleTH} {...ResultBarH1} />) : (<SkelMobFBar />)}
                {tourTotal >= 0 ? (<TotalTour>{i18n.t('collective.list..mobile.search')} {tourTotal ? tourTotal : '0'} {i18n.t('collective.list.mobile.titletour')}</TotalTour>) : (<SkelMobSBar />)}
              </ResultBar>
            </Grid>
            <Grid item xs={6} >
              <FilterBar >
                <SelectSort id="sorttour" onChange={e => handleSort(e)} value={sortBy} >
                  <option value="minPrice">{i18n.t('collective.list.sb.lowprice')}</option>
                  <option value="maxPrice">{i18n.t('collective.list.sb.hiprice')}</option>
                  <option value="default">{i18n.t('collective.list.sb.rectour')}</option>
                  <option value="rating">{i18n.t('collective.list.sb.rating')}</option>
                </SelectSort>
              </FilterBar>
            </Grid>
          </FilterBox>
        </ContainerTour>
      </TourListFilterBox>
    )
  })
)

export default MobileTop