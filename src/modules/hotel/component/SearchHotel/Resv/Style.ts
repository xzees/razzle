import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import { AppImage } from 'common/components';
import { Rating } from '@material-ui/lab';

export const BoxButton = styled(Box)`
  margin: 15px 0;
  margin-bottom: 0;
`

export const BoxButtonDesktop = styled(Box)`
  margin: 15px 0;
  margin-bottom: 0;
  width:40%;
`

export const ViewButtonMobile = styled.a`
  background: linear-gradient(to right, rgb(38,177,122), rgb(155,218,129));
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #51c07d;
  color: #fff;
  display: block;
  font-size: 1.4375rem;
  padding: 7px 0;
  text-align: center;
`

export const ViewButtonDesktop = styled.a`
  border: 1px solid #440099;
  border-radius: 4px;
  color: #440099;
  display: inline-block;
  float: right;
  font-size: 1.3125rem;
  margin-top: 0;
  padding: 8px 24px;
  text-align: center;
  width: max-content;
  :hover {
    background: #440099;
    color: #fff;
  }
`