import styled from 'styled-components';
import ImageManager from 'common/Manager/ImageManager';
import { Grid, Box } from '@material-ui/core';
import { Button } from 'common/components/Button';
import ColorManager from 'common/Manager/ColorManager';

export const propsBannerSection = {
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
    // height: '100% !important',
    height: '100%',
    minHeight: '64px',

    lineHeight: '0',
    // minHeight: '100% !important'
  },
  grid: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginBottom: '7px'
  },
  gridAutocomplete: { 
    marginBottom: '7px'
  },
  gridDatepicker: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginBottom: '7px'
  },
  gridGuest: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginBottom: '7px'
  },
  gridButton: { 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginBottom: '7px'
  },
  
};

export const BannerWrapper = styled.section`
  align-items: center;
  background-color: #00000040;
  display: flex;
  min-height:550px;
  @media (max-width: 700px) {
     min-height: 250px; 
  }
  @media (max-width: 1024px) {
    min-height: 350px; 
  }
  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
  padding-top: 24px;
  ::before {
    background-image: url(${ImageManager.default.images.hotel.BG9});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Boxs = styled(Box)`
  width: 100%;
  height: 100%;
  margin-top: 3px !important;
  margin-bottom: 3px;
`;

export const Buttons = styled(Button)`
  background-color: #187CC7;
  font-size: 1.3125rem;
  height: 100%;
  padding: 0px;
  line-height: 0;
`;

