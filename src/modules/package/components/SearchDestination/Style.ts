import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';
import styled from 'styled-components';

export const SearchButton = styled.button`
  border: none;
  width: 100%;
  min-height: 58px;
  border-radius: 4px;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.extraLarge};
  line-height: 0.8;
  &:hover {
    background-color: ${ColorManager.default.fourthColor};
  }
`;
