import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';

interface EditSearchScrollContainerProps {
  windowInnerHeight: number;
}

export const EditSearchScrollContainer = styled.div<EditSearchScrollContainerProps>`
  position: relative;
  overflow-y: auto;
  height: calc(${(props) => props.windowInnerHeight.toString()}px - 150px);
  scroll-behavior: smooth;
`;

export const FooterButtonWrapper = styled.div`
  position: absolute;
  height: 55px;
  bottom: 0px;
  width: 100%;
`;

export const FooterButton = styled.button`
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border: 0px;
  background-color: #694a8d;
  color: ${ColorManager.default.white};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${ColorManager.default.greyColor};
  margin: 0px;
`;
