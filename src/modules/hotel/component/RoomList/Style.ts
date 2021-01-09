import styled from 'styled-components';
import { Grid, Box, withStyles } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import Chip from '@material-ui/core/Chip';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';


export const GridForPrice = styled(Grid)`
  border-top: 1px solid #f3f2fa;
  padding-top: 15px !important;
  margin-top: 15px !important;
  
  text-align: right;
  bottom: 35px !important;
  // position: absolute;
  margin-left: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  right: 1rem;
`

export const CodeMobile = styled.span`
  color: #888aaa;
  display: block !important;
  font-size: ${FontManager.default.small};
  margin-left: -5px;
`;


export const BoxTitle = styled(Box)`
  &.MuiBox-root{
    display: block;
    display: -webkit-box;
    max-width: inherit;
    max-height: 60px;
    line-height: 1;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const SMobile = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
`;

export const SectionDesktop = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const Containers = styled(Container)`
  
  background-color: #f3f2fa;
`;


export const BoxMainMobile = styled(Box)`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
  .tour-period {
    display: none;
  }
  box-shadow: 0px 2px 2px 0px #7b7b7b52;
  .tour-period.open {
    display: flex;
  }
`

export const BoxContent = styled.div<any>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
`
export const BoxContentRight = styled.div<any>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
  height: 100% !important;
  .boxleft {
    width: 100%; 
    height: 100% !important;
    padding-left: 20px;
    border-left: 1px solid #e0e0e0 !important;
    max-width: inherit;
  }
  
`
export const BoxReview = styled.div<any>`
  color: ${(props: any)=> props.color || ColorManager.default.fourthColor};
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20};
  line-height: 0.8;
`;
export const ArrowLeftRoundedIcons = styled<any>(ArrowLeftRoundedIcon)`
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20} !important;
  margin-top: ${(props: any) => props.marginTop ? props.marginTop : '2'};

  position: static !important;
  margin-left: -2px;
  svg {
    font-size: 1rem !important;
  }
`
export const TextAndIcon = styled.div<any>`
  color: ${(props: any)=> props.color || ColorManager.default.fourthColor};
  margin-top: ${(props: any)=> props.marginTop || '1px'};
  line-height: 1;
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20};
  margin-left: 0px;
  padding-left: 0.8em;
  text-indent: -0.8em;
`;