import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

// arrow: {
//   color: theme.palette.common.black, 
// },
// tooltip: {
//   backgroundColor: theme.palette.common.black,
// },
export const DivOutSide = styled.div`
  font-size: 21px !important;
  color:${ColorManager.default.primaryColor};
  position: relative;
  border-radius: 5px;
`;

export const DivInSideMobile = styled.div`
    overflow: auto;
    padding: 0px;
    border-radius: 5px;
    text-align:left !important;
`;

export const DivInSide = styled.div`
    max-height: ${(props: any) => props.maxHeight ? props.maxHeight : ''} ;
    overflow: auto;
    padding: 0px;
    border-radius: 5px;
    text-align:left !important;
`;
export const UlMobile = styled.ul`
    margin: 0;
    background:white;
    width: 100% !important;
    padding: 0;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: hidden;
    margin-top:11px;
`;
export const Ul = styled.ul`
  margin: 0;
  background:white;
  min-width: ${(props: any) => props.minWidth ? props.minWidth : '400px'} ;
  padding: 0;
  z-index: 1;
  position: absolute;
  list-style: none;
  background-color: white
  overflow: hidden;
  margin-top:11px;
  box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);
  border-radius: 5px;
  ::before {
    border-bottom-color: ${(props: any) => props.arrowColor ? props.arrowColor : ColorManager.default.greyColor} !important;
    border-width: 5px!important;
    margin-top: -9px;
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left:3%;
    top: -1px;
    border: solid transparent;
  }
`;
