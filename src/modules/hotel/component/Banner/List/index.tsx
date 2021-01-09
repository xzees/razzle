import React from 'react';
import Heading from 'common/src/components/Heading';
import { Grid, Box } from '@material-ui/core';
import {
  Containers as ContainerA,
  ThemeDesktop,
  ContainerSearch,
  h3Style,
  Detail,
  boxStyle,
  gridStyle,
  SectionWrapper,
  SortingWrapper
} from './Style';
import SearchForm from 'modules/hotel/component/SearchForm';
import SortingBar from 'modules/hotel/component/SortingBar';
import { inject, observer } from 'mobx-react';
import Map from 'modules/hotel/component/Map';
import qs from 'query-string';
import i18n from 'utilities/I18n';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';
import ModelMap from 'modules/hotel/component/ModelMap';

interface Iprops {
  btnSearch: any;
}

export const HiddenFormSearch = (props: Iprops) => {
  return (
    <>
      <ContainerSearch>
        <Grid 
          container={true} 
          spacing={1}
        >
            <SearchForm 
              Theme={ThemeDesktop} 
              btnSearch={props.btnSearch} 
            />
        </Grid>
      </ContainerSearch>
    </>
  );
};

const BannerSection = inject('stores')(
  observer((props: HotelListInterface) => {

  const HotelRootStore = props.stores!.HotelRootStore;
  const ListStore = props.stores!.HotelRootStore.ListStore;
  const param: any = qs.parse(props.location.search);
  const Head = i18n.t('hotel.components.banner.list.search.heading') + ' : ' + (param.name || '')
  
  const hotelLists = ListStore.returnSearchModel;
    
  return (
    <>
      <SectionWrapper>
          <ContainerA>
              <Box 
                style={boxStyle}
                display={'flex'} 
                width={'100%'}
              >
                <Grid container={true} spacing={4}>
                  <SearchForm 
                    Theme={ThemeDesktop}
                    btnSearch={HotelRootStore.btnSearch} 
                    btnText={i18n.t('hotel.components.banner.list.btnsearch')}
                  />
                </Grid>
              </Box>
          </ContainerA>
      </SectionWrapper>
      <SortingWrapper>
        <ContainerA>
          <Grid 
            container={true} 
            spacing={4} 
            style={gridStyle}
          >
            <Grid xs={3} item={true}>
              <ModelMap 
                  {...props}
                  latitude={param.latitude} 
                  longitude={param.longitude}
                  hotelLists={hotelLists}
                  >
                <Map 
                  latitude={param.latitude} 
                  longitude={param.longitude}
                />
              </ModelMap>
            </Grid> 
            <Grid xs={9} item={true}>
              <Box>
                <Heading content={Head} {...h3Style} />
                <Detail>
                  {i18n.t('hotel.components.banner.list.search.detailfront')}
                  &nbsp;
                  {ListStore.returnCountHotel} 
                  &nbsp;
                  {i18n.t('hotel.components.banner.list.search.detailback')}
                </Detail>
                <SortingBar sortingFn={ListStore.setSort} />
              </Box>
            </Grid>
          </Grid>
        </ContainerA>
      </SortingWrapper>
    </>
  );
}));

export default BannerSection;