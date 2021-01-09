import styled from 'styled-components';

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  image-rendering: auto;
  width: auto;
  width: 90px;
  height: 60px;
  cursor: pointer;
  object-fit: cover !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
  opacity: 0.5;
  :hover {
    opacity: 1;
    border: 2px solid white;
  }
`;
