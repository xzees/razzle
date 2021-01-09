import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface TextWithIconWrapperProps {
  color?: 'green' | 'brown';
}

export const OptionWrapper = styled.div`
  width: 100%;
`;

export const TextWithIconWrapper = styled.div<TextWithIconWrapperProps>`
  display: grid;
  grid-template-columns: 17px auto;
  width: 100%;
  color: ${(props: TextWithIconWrapperProps) =>
    props.color === 'brown'
      ? ColorManager.default.brown
      : ColorManager.default.greenColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 1;
  & > img {
    margin-top: 4px;
  }
`;
