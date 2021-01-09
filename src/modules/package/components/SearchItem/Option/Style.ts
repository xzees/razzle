import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface OptionWrapperProps {
  isMobile: boolean;
}

interface TextWithIconWrapperProps {
  isMobile: boolean;
  color?: 'green' | 'brown';
}

export const OptionWrapper = styled.div<OptionWrapperProps>`
  ${(props: OptionWrapperProps) =>
    props.isMobile
      ? ''
      : `
    display: flex;
    flex-wrap: wrap;
  `};
  max-width: 100%;
`;

export const TextWithIconWrapper = styled.div<TextWithIconWrapperProps>`
  display: grid;
  grid-template-columns: 17px auto;
  color: ${(props: TextWithIconWrapperProps) =>
    props.color === 'brown'
      ? ColorManager.default.brown
      : ColorManager.default.greenColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: TextWithIconWrapperProps) =>
    props.isMobile ? FontManager.default.small : FontManager.default.text};
  line-height: 1;
  ${(props: TextWithIconWrapperProps) =>
    props.isMobile
      ? ''
      : `
    flex-basis: 50%;
    &:last-child:nth-child(odd) {
      flex-basis: 100%;
    }
  `}
  & > img {
    margin-top: ${(props: TextWithIconWrapperProps) =>
      props.isMobile ? '3px' : '4px'};
  }
`;
