import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface TextWrapperProps {
  mb?: string | number;
}

export const ReplyItemWrapper = styled.div`
  position: relative;
  padding: 21px 24px 25px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: ${ColorManager.default.greyColor};
  &::before {
    border-bottom-color: ${ColorManager.default.greyColor}!important;
    border-width: 12px !important;
    content: '';
    position: absolute;
    right: 28px;
    top: -20px;
    border: solid transparent;
  }
`;

export const TextWrapper = styled.div<TextWrapperProps>`
  ${(props: TextWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const MessageText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 20px;
`;

export const ReplyerText = styled.h6`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 20px;
`;

export const ReplyDateText = styled.span`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 20px;
`;
