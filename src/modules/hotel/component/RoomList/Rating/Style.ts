import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import FontManager from 'modules/hotel/Manager/FontManager';

export const BoxMobile = styled(Box)`
  align-items: center;
  justify-content: left;
  margin-left: -3px;  
`;

export const BoxDesktop = styled(Box)`
  align-items: center;
  justify-content: left;
  padding-bottom:5px;
`;

export const CodeDesktop = styled.span`
  color: #888aaa;
  display: flex !important;
  font-size: 1.4375rem;
`;

export const RatingMobile = styled<any>(Rating)`
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20} !important;
  margin-top: ${(props: any) => props.marginTop ? props.marginTop : '2'};

  position: static !important;
  margin-left: -2px;
  svg {
    font-size: 1rem !important;
  }
`;

export const RatingNotfind = styled.div`
  position: static !important;
  height: 20px;
`;

export const RatingDesktop = styled(Rating)`
  font-size: 1.4375rem !important;
  margin-left: 10px;
  margin-top: 2px;
  position: absolute !important;
  svg {
    font-size: 1.3125rem !important;
  }
`;

export const ShowDesktop = styled.button`
  background-color: #fdb714;
  border: 0;
  border-radius: 6px;
  color: #fff;
  float: right;
  font-size: 1.1875rem;
  margin-top: -2px;
  min-width: 80px;
  padding: 3px;
  text-align: center;
`;

export const ContentDesktop = styled.div`
  border-top: 1px solid #f3f2fa;
  padding: 20px 0;
  span {
    color: #000;
    font-family: Sarabun;
    font-size: 15px;
    line-height: 1;
  }
`;