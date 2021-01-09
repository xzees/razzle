import React from 'react';
import styled from 'styled-components';
import ImageManager from 'common/Manager/ImageManager';
import Heading from 'common/src/components/Heading';
import { Grid, Box } from '@material-ui/core';
import {
  AppImages,
  Containers as ContainerA,
  ThemeDesktop,
  ContainerSearch
} from './Style';
import SearchForm from '../../SearchForm';
import SortingBar from 'modules/hotel/component/SortingBar'
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Map from '../../Map'
import qs from 'query-string';
import i18n from 'utilities/I18n';

interface Iprops {
  title: string ;
  detail: string ;
  detailTwo?: string ;
  open: any;
  setOpen: any;
  [key: string]: any;
  btnSearch: any;
  stores?: RootStore;
}


const BannerSection = inject('stores')(
  observer((props: any) => {
    
  const HotelRootStore = props.stores!.HotelRootStore;
  const ListStore = props.stores!.HotelRootStore.ListStore;
  const param: any = qs.parse(props.location.search);

  return (
    <>
      <SectionWrapper>
          <ContainerA>
              <Box style={{
                padding: '10px 0px 10px 0px'
              }}
                display={'flex'} 
                width={'100%'}
              >
                <Grid container={true} spacing={4}>
                  <SearchForm 
                    Theme={ThemeDesktop}
                    btnSearch={HotelRootStore.btnSearchRoomList} 
                    btnText={i18n.t('hotel.components.banner.list.btnsearch')}
                  />
                </Grid>
              </Box>
          </ContainerA>
      </SectionWrapper>
    </>
  );
}));

const propsBannerSection = {
  boxStyle: {
    margin: '0 auto',
  },
  h1Style: {
    as: 'h1',
    color: '#fff',
    fontSize: ['30px', '30px', '30px', '40px', '50px'],
    fontWeight: 'normal',
    mb: '2px',
    textAlign: 'center',
    fontFamily: 'DBHeaventRoundedv32' ,
    lineHeight: 1
  },
  h3Style: {
    as: 'h3',
    color: '#fff',
    fontSize: ['23px', '23px', '23px', '28px', '30px'],
    fontWeight: 'normal',
    p: 0,
    m: 0,
    mb: '10px',
    textAlign: 'center',
    fontFamily: 'DBHeaventRoundedv32' ,
    lineHeight: 1
  },
  button: {
    fontSize: '1.3125rem',
    padding: '0px',
    lineHeight: '0',
    height: '59px'
  },
  grid: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginBottom: '7px'
  },
  gridAutocomplete: { 
  },
  gridDatepicker: { 
   
  },
  gridGuest: { 
   
  },
  gridButton: { 
   
  },
  Autocomplete: {
    xs: '4',
    md: '4',
    lg: '4'
  },
  Datepicker: {
    xs: '4',
    md: '4',
    lg: '4'
  },
  Guest: {
    xs: '4',
    md: '4',
    lg: '4'
  }
  
};

const h3Style = {
  as: 'h3',
  color: ColorManager.default.fifthColor,
  fontSize: FontManager.default.LARGE_MEDIUM_30,
  fontFamily: FontManager.default.primaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  marginTop: 0,
  paddingLeft: '1rem !important',
  paddingRight: '1rem !important',
  marginBottom: 0,
}; 
const DivDetail = styled.div`
  width: 61px;
  text-align: center;
`;
const Detail = styled.p`
  color: ${ColorManager.default.secondaryColor};
  font-size: ${FontManager.default.TEXT_20};
  margin: 0;
  line-height: 1;
  text-align: left;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
`;
const DetailRight = styled.p`
  color: #fff;
  font-size: 23px;
  margin: 0;
  
`;

const BannerWrapper = styled.section`
  align-items: center;
  background-color: ${ColorManager.default.fifthColor};
  min-height: 80px;
  margin-top: 70px;
  ::before {
    background-color: #440099;
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 1279px) {
    min-height: 140px;
    padding-top: 20px;
  }
`;

const SectionWrapper = styled.section`
  align-items: center;
  background-color: ${ColorManager.default.fifthColor};
  margin-top: 70px;
  position: sticky;
  top: 64px;
  z-index: 9999;
  @media (max-width: 1279px) {
    padding-top: 20px;
  }

`;

const SortingWrapper = styled.section`
  background-color: #FCE6E8;
`;

export default BannerSection;