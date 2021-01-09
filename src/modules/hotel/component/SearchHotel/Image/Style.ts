import styled from 'styled-components';
import { AppImage } from 'common/components';

const cssforImage = `
  border: 0;
  border-radius: 5px 0px 0px 5px;
  margin-bottom: 0px !important;
  object-fit: cover;
  vertical-align: middle;
  padding: 0px !important;
  min-height: 100%;
  max-width: 100%;
`

export const ImgMobile = styled.img`
  ${cssforImage}
`;

export const ImgLazyMobile = styled(AppImage)`
  ${cssforImage}
`;

export const ImgDesktop = styled.img<any>`
  border-radius: ${(props: any) => props.borderRadius ? props.borderRadius : '6px 0px 0px 6px' };
  display: block;
  height: 100%;
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ImgBox = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const BoxImg = styled.div`
  border-radius: 6px 0 0 0px;
  height:100% ;
  overflow: hidden;
`;

export const ImgCard = styled.div`
  display: block;
  height: 100%;
  min-height: 233px;
  overflow: hidden;
  position: relative;
  transition: transform .25s;
  width: 100%;
`;