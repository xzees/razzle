import React from 'react'
import LocationCity from '@material-ui/icons/LocationCity';
import Hotel from '@material-ui/icons/Hotel';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import ColorManager from 'common/Manager/ColorManager';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';
import { AppImage } from 'common/components';
import ImageManager from 'common/Manager/ImageManager';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FontManager from 'modules/hotel/Manager/FontManager';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { ReactSVG } from 'react-svg';

const LocationOns = (props: any) => {
  return (
    <SearchRoundedIcon  />
  );
};

const Hotels = (props: any) => {
  return (
    <Hotel {...props} />
  );
};
const  FlightTakeoffs = (props: any) => {
  return (
    <FlightTakeoff style={{ color: ColorManager.default.primaryColor }} {...props} />
  );
};

const  LocationCitys = (props: any) => {
  return (
    <LocationCity style={{ color: ColorManager.default.primaryColor }} {...props} />
  );
};

export const  LocationOnIcons = (props: any) => {
  return (
    <LocationOnIcon style={{ color: ColorManager.default.primaryColor }} {...props} />
  );
};

const AppImageIcon = styled(AppImage)`
    width: ${(props: any)=> props.width || '12px'};
    vertical-align: middle;
    margin-right: 5px;
    margin-bottom: 3px;
`;

const date = new Date();

export const KanokOrange = (props: any) => {
  return (
    <AppImageIcon src={ImageManager.default.images.hotel.icon.kanokOrange + '?v=' + date.getTime()}/>
  );
};

export const Crown = (props: any) => {
  return (
    <AppImageIcon src={ImageManager.default.images.hotel.icon.crown + '?v=' + date.getTime()}/>
  );
};

export const Coin = (props: any) => {
  return (
    <AppImageIcon src={ImageManager.default.images.hotel.icon.coin + '?v=' + date.getTime()}/>
  );
};

export const Verified = (props: any) => {
  return (
    <AppImageIcon src={ImageManager.default.images.hotel.icon.verified + '?v=' + date.getTime()}/>
  );
};

const ExpandMoreIconCss = {
  color: ColorManager.default.white
};

export const RenderExpandMoreIcon = () => {
  return (
    <ChevronLeftRoundedIcon fontSize={'large'} style={ExpandMoreIconCss} />
  );
};

export const RenderTagIcon = () => {
  return (
    <AppImageIcon 
      src={ImageManager.default.images.hotel.icon.tag + '?v=' + date.getTime()}
      width={'40px'}
      style={{
        marginBottom: '5px'
      }}
    />
  );
};

export const RenderKingBedIcon = () => {
  return (
    <AppImageIcon 
      src={ImageManager.default.images.hotel.icon.bed2 + '?v=' + date.getTime()}
      width={'30px'}
      style={{
        marginBottom: '5px'
      }}
    />
  );
};

export const RenderSingleBedIcon = () => {
  return (
    <AppImageIcon 
      src={ImageManager.default.images.hotel.icon.bed1 + '?v=' + date.getTime()}
      width={'30px'}
    />
  );
};

export const RenderIconFacility = (props: any) => {
  return (
    // <img
    //   style={props.style} 
    //   src={props.src + '?v=' + date.getTime()}
    // />
    <MyReactSVG src={props.src + '?v=' + date.getTime()}/>
  );
};

export const RenderPerson = styled<any>(PersonRoundedIcon)`
  &.MuiSvgIcon-root {
    font-size: ${FontManager.default.LARGE_MEDIUM_30} !important;
    color: ${ColorManager.default.secondaryColor} !important;
    margin-left: -5px;
  }
`;

export const RenderPlus = styled<any>(AddRoundedIcon)`
  &.MuiSvgIcon-root {
    font-size: ${FontManager.default.TEXT_20} !important;
    color: ${ColorManager.default.secondaryColor} !important;
    margin-left: -5px;
    margin-left: -10px;
    margin-bottom: 10px;
  }
`;

export const RenderPrev = styled<any>(ArrowBackIosRoundedIcon)`
  &.MuiSvgIcon-root {
    font-size: ${FontManager.default.LARGE_EXTRA_40} !important;
    color: ${ColorManager.default.white} !important;
    margin-left: -5px;
  }
`;
export const RenderNext = styled<any>(ArrowForwardIosRoundedIcon)`
  &.MuiSvgIcon-root {
    font-size: ${FontManager.default.LARGE_EXTRA_40} !important;
    color: ${ColorManager.default.white} !important;
    margin-left: -5px;
  }
`;

export const MyReactSVG = styled<any>(ReactSVG)`
    height: 25px;
    width: 15px;
    margin: auto;
    svg {
        height: 15px;
        width: 15px; 
    }
    path {
        fill: ${ColorManager.default.fourthColor};
    }
`;

export {
  Hotels,
  FlightTakeoffs,
  LocationOns,
  LocationCity
};