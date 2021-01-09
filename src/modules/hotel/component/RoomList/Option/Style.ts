import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Box } from '@material-ui/core';


export const box = {
  style: {
      verticalAlign: 'middle',
      width: '15px',
      filter: 'invert(127%) sepia(98%) saturate(874%) hue-rotate(199deg) brightness(115%) contrast(38%)'
  }
};
export const removePadding = { padding: 0 };

export const boxMobile = {
  style: {
      verticalAlign: 'middle',
      width: '10px',
      filter: 'invert(127%) sepia(98%) saturate(874%) hue-rotate(199deg) brightness(115%) contrast(38%)'

  }
};

export const divMobile = {
  marginLeft: '0px',
  paddingLeft: '0px',
  textIndent: '0px',
};

export const boxDesktop = {
  marginTop: '12px',
  marginLeft: '0px',
  paddingLeft: '0px',
  textIndent: '0px',
};

export const ViewButton = styled.div<any>`
    border-style: dashed !important;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    color: #888aaa;
    font-size: 1.4rem;
    margin-top: 0;
    cursor: pointer;
    font-family: "DBHeaventRoundedMedv32";
    margin-right: 13px;
    padding: 0px 10px;
`

export const BoxBottom = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;

export const TextAndIcon = styled.div<any>`
  color: ${(props: any)=> props.color || ColorManager.default.fourthColor};
  margin-top: ${(props: any)=> props.marginTop || '1px'};
  line-height: 1;
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20};
  margin-left: 0px;
  padding-left: 0.8em;
  text-indent: -0.8em;
`;