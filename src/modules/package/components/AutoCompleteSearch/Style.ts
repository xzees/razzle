import styled from 'styled-components';
import { TextField, withStyles } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface OutSideWrapperProps {
  width?: string | number;
}

export const InputSearchMobile = withStyles({
  root: {
    '& .MuiOutlinedInput': {
      '&-root': {
        height: '44px',
        backgroundColor: ColorManager.default.greyColor,
        '& .MuiInputBase-input': {
          color: ColorManager.default.fourthColor,
          fontFamily: `'${FontManager.default.primaryFont}'`,
          fontSize: FontManager.default.header,
          lineHeight: 1.09,
        },
      },
      '&-input': {
        padding: '10px 24px 12px',
      },
      '&-notchedOutline': {
        border: 'none',
      },
    },
  },
})(TextField);

export const InputWrapper = styled.div`
  padding: 15px 20px 16px;
`;

export const OutSideWrapper = styled.div<OutSideWrapperProps>`
  position: relative;
  width: ${(props: OutSideWrapperProps) => props.width || '100%'};
  border-radius: 5px;
`;

export const ListBoxWrapper = styled.div`
  & > ul {
    position: absolute;
    min-width: 100%;
    background-color: ${ColorManager.default.white};
    margin-top: 12px;
    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    &::before {
      border-bottom-color: ${ColorManager.default.greyColor}!important;
      border-width: 12px !important;
      content: '';
      position: absolute;
      left: 15px;
      top: -20px;
      border: solid transparent;
    }
  }
`;
