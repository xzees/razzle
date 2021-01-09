import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';

export const HeaderEditSearchSection = styled.section`
  position: sticky;
  display: flex;
  align-items: center;
  height: 74px;
  top: 64px;
  background-color: ${ColorManager.default.fifthColor};
  z-index: 9998;
`;
