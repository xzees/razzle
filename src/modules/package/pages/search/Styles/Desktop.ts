import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';

export const ContentSection = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
