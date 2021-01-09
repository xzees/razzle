import React from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import i18n from 'utilities/I18n';
import { Grid, AccordionSummary } from '@material-ui/core';
import Parampath from 'common/models/Parampath';
import Heading from 'common/src/components/Heading';
import {
  MobileFilterBox, MobileFilterbar, MobileFilterLabel, MobileSortBar, MobileSortLabel, MobileSortText,
  Bar, FilterBox, BarLeft, SectionMobile, Containers, Input,
  GridBar, FilterBoxForFilter, Theme, TitleMobile, CodeDesktop, DivSticky,
  Accordions, styleAccordionSummary, AccordionSummarys, HeadingDiv, ViewButtonDesktop, ButtonBottom
} from './Style';
import { FilterListRounded, SwapVertRounded } from '@material-ui/icons';
import { Button } from 'common/components/Button';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import ModalScreen from './ModalScreen';
import PriceFilter from './Price';
import PeriodFilter from './Period';
import RouteFilter from './Route';
import DurationFilter from './Duration';
import AirlineFilter from './Airline';

type Props = {
  isMobile?: boolean;
  tourFilter: TourFilterModel;
  handleSort?: any;
  sortBy?: string;
}

const Index = inject("stores")(
  observer((props: Props) => {
    const {
      isMobile,
      tourFilter,
      handleSort,
      sortBy
    } = props;

    const buttonOpenModel = (props: any) => {
      return (
        <MobileFilterbar onClick={props.onClick}><MobileFilterLabel><FilterListRounded htmlColor="#440099" />{i18n.t('collective.list.filter.title')}</MobileFilterLabel></MobileFilterbar>
      )
    }

    const [filterPrice, setFilterPrice] = React.useState('');
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterPrice(event.target.value);
      console.log(event.target.value);
    };
    const [filterPeriod, setFilterPeriod] = React.useState(true);
    const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterPeriod(event.target.checked);
      console.log(event.target.value)
    };
    const [filterRoute, setFilterRoute] = React.useState(true);
    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterRoute(event.target.checked);
      console.log(event.target.value)
    };
    const [filterDuration, setFilterDuration] = React.useState(true);
    const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterDuration(event.target.checked);
      console.log(event.target.value)
    };
    const [filterAirline, setFilterAirline] = React.useState(true);
    const handleAirlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterAirline(event.target.checked);
      console.log(event.target.value)
    };

    const btnResetFilter = (props: any) => {
      setFilterPrice('');
    }
    const btnSearchFilter = (props: any) => {

    }

    if (isMobile) {

      return (
        <MobileFilterBox container>
          <Grid item xs={6}>
            <ModalScreen
              fullscreen={true}
              label={'filter'}
              buttonOpenModel={buttonOpenModel}
              title={i18n.t('collective.list.filter.title')}
            >
              {tourFilter?.price?.priceRange?.length > 0 ? (
                <>
                  <AccordionSummarys {...styleAccordionSummary}>
                    <HeadingDiv>
                      <Heading content={i18n.t('collective.list.filter.price')} {...TitleMobile} />
                    </HeadingDiv>
                  </AccordionSummarys>
                  <AccordionSummary>
                    <PriceFilter tourFilter={tourFilter} filterPrice={filterPrice} handlePriceChange={handlePriceChange} />
                  </AccordionSummary>
                </>
              ) : undefined}

              {tourFilter?.period?.length > 0 ? (
                <>
                  <AccordionSummarys {...styleAccordionSummary}>
                    <HeadingDiv>
                      <Heading content={i18n.t('collective.list.filter.period')} {...TitleMobile} />
                    </HeadingDiv>
                  </AccordionSummarys>
                  <AccordionSummary>
                    <PeriodFilter tourFilter={tourFilter} handlePeriodChange={handlePeriodChange} />
                  </AccordionSummary>
                </>
              ) : undefined}

              {tourFilter?.route?.length > 0 ? (
                <>
                  <AccordionSummarys {...styleAccordionSummary}>
                    <HeadingDiv>
                      <Heading content={i18n.t('collective.list.filter.route')} {...TitleMobile} />
                    </HeadingDiv>
                  </AccordionSummarys>
                  <AccordionSummary>
                    <RouteFilter tourFilter={tourFilter} handleRouteChange={handleRouteChange} />
                  </AccordionSummary>
                </>
              ) : undefined}

              {tourFilter?.duration?.length > 0 ? (
                <>
                  <AccordionSummarys {...styleAccordionSummary}>
                    <HeadingDiv>
                      <Heading content={i18n.t('collective.list.filter.duration')} {...TitleMobile} />
                    </HeadingDiv>
                  </AccordionSummarys>
                  <AccordionSummary>
                    <DurationFilter tourFilter={tourFilter} handleDurationChange={handleDurationChange} />
                  </AccordionSummary>
                </>
              ) : undefined}

              {tourFilter?.airline?.length > 0 ? (
                <>
                  <AccordionSummarys {...styleAccordionSummary}>
                    <HeadingDiv>
                      <Heading content={i18n.t('collective.list.filter.airline')} {...TitleMobile} />
                    </HeadingDiv>
                  </AccordionSummarys>
                  <AccordionSummary>
                    <AirlineFilter tourFilter={tourFilter} handleAirlineChange={handleAirlineChange} />
                  </AccordionSummary>
                </>
              ) : undefined}

              <ButtonBottom>
                <Grid container={true} spacing={2}>
                  <Grid item={true} xs={4}>
                    <ViewButtonDesktop onClick={btnResetFilter} style={Theme.button} >{i18n.t('collective.list.filter.reset')}</ViewButtonDesktop>
                  </Grid>
                  <Grid item={true} xs={8}>
                    <Button onClick={btnSearchFilter} style={Theme.button} >{i18n.t('collective.list.filter.confirm')}</Button>
                  </Grid>
                </Grid>
              </ButtonBottom>
            </ModalScreen>
          </Grid>

          <Grid item xs={6}>
            <MobileSortBar >
              <MobileSortLabel htmlFor="sortMobile"><SwapVertRounded htmlColor="#440099" />{i18n.t('collective.list.sb.title')}</MobileSortLabel>
              <MobileSortText id="sortMobile" onChange={e => handleSort(e)} value={sortBy}>
                <option value="minPrice">{i18n.t('collective.list.sb.lowprice')}</option>
                <option value="maxPrice">{i18n.t('collective.list.sb.hiprice')}</option>
                <option value="default">{i18n.t('collective.list.sb.rectour')}</option>
                <option value="rating">{i18n.t('collective.list.sb.rating')}</option>
              </MobileSortText>
            </MobileSortBar>
          </Grid>

        </MobileFilterBox>
      )
    }

    return (
      <>
        <DivSticky>

        </DivSticky>
      </>
    )

  })
)

export default Index