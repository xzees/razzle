import styled from 'styled-components';
import { Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { 
  width, 
  marginBottom,
  margin,
  display
} from 'styled-system';

interface IMText {
  color?: string;
  lineHeight?: string;
}

export const TextMobile = styled.p<any>`
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_TINY_18} !important;
  margin: 0px;
  color: ${(props: IMText) => props.color || ColorManager.default.black };
  line-height: ${(props: IMText) => props.lineHeight || '16px' };
  ${width}
  ${marginBottom}
  ${margin}
  ${display}
`;

export const PriceDetailMobile = {
    as: 'h5',
    color: '#440099',
    fontFamily: '"DBHeaventRoundedMedv32"',
    fontSize: '1.9375rem',
    fontWeight: 'normal',
    lineHeight: 1,
    mb: '0',
};

export const TextPrice = styled.h5<any>`
  margin-top: 0px;
  ${marginBottom ?? 'margin-bottom: 1.2rem;'}
  font-size: ${FontManager.default.LARGE_EXTRA_40};
  color: #440099;
  font-family: ${FontManager.default.secondaryFont};
  font-weight: normal;
  width: 100%; 
  line-height: 0.8;
`;

export const TextPriceM = styled.span`
  font-size: ${FontManager.default.LARGE_MEDIUM_30};
  color: #440099;
  display: contents;
  font-family: ${FontManager.default.secondaryFont};
  font-weight: normal;
  width: 100%;
`;

export const DiscountDiv = styled.div`
color: #440099; TextPrice
font-family: "DBHeaventRoundedMedv32";
font-weight: normal;
width: 100%;
margin-top: 10px;
line-height: 0.6;
`

export const DiscountMobile = styled.span`
  box-sizing: border-box;
  margin-right: 5px;
  margin-bottom: 0;
  font-size: ${FontManager.default.LARGE_MEDIUM_30};
  color: ${ColorManager.default.fourthColor};
  display: inline-table;
  font-family: "DBHeaventRoundedMedv32";
  font-weight: normal;
  position:relative;
  line-height: 1;
  ::after {
    border-bottom: 1px solid ${ColorManager.default.fourthColor};
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;


export const DiscountDesktop = styled.span`
  display: inline-block;
  margin-bottom: 0;
  font-size: ${FontManager.default.LARGE_EXTRA_40};
  color: ${ColorManager.default.fourthColor};
  font-family: "DBHeaventRoundedMedv32";
  font-weight: normal;
  position: relative;
  ::after {
    border-bottom: 1px solid ${ColorManager.default.fourthColor};
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const PriceTextMobile = styled.span`
  box-sizing: border-box;
  margin-top: 7px;
  padding-top: 3px;
  margin-bottom: 0;
  font-size: 31px;
  color: ${ColorManager.default.primaryColor};
  display: inline-table;
  font-family: "DBHeaventRoundedMedv32";
  font-weight: normal;
  position:relative;
  line-height: 0.6;
`;

export const BoxPrice = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;
export const BoxFlexRight = styled(Box)`
  display: flex; 
  text-align: right;
`;