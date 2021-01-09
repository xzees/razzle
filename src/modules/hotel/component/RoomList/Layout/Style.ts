import styled from 'styled-components';
import { Box } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'

export const Boxs = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #e0e0e0b3;
  display: flex;
  margin-bottom: 15px; 
`

export const Containers = styled(Container)`
  padding: 0;
  background-color: #f3f2fa;
`;

export const SectionMobile = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
`;

export const BoxMainMobile = styled(Box)`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
  .tour-period {
    display: none;
  }
  box-shadow: 0px 2px 2px 0px #7b7b7b52;
  .tour-period.open {
    display: flex;
  }
`

export const BoxMain = styled(Box)`
  color: unset;
  @media (max-width: 710px) {
    .Air-Box {
      max-width: 25%;
      flex-basis: 25%;
    }
    .Date-Box {
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    }
    .Country-Box {
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    }
    .Resv-Box {
      max-width: 100%;
      flex-basis: 100%;
    }
    .Resv-Box a {
      margin-top: 10px;
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    img {
      image-rendering: auto;
    }
    .Box-Tour {
      display: block;
      padding: 20px 30px;
    }
    .Box-Tour-Img {
      border-radius: 6px;
      max-width: unset;
      min-width: unset;
      padding: 0;
    }
    .Img-Card {
      height: 249px;
    }
    .Box-Tour-Content {
      padding: 0!important;
      padding-top: 15px!important;
    }
  }
  @media (max-width: 1219px) {
    .Box-Tour-Content {
      padding: 20px;
    }
  }
`
