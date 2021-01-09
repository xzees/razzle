import styled from 'styled-components';

export const BoxContent = styled.div<any>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
`;

export const BoxContentRight = styled.div<any>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
  height: 100% !important;
  .boxleft {
    width: 100%; 
    height: 100% !important;
    padding-left: 20px;
    border-left: 1px solid #e0e0e0 !important;
    max-width: inherit;
  }
`;