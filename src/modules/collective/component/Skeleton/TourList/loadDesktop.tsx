import React from 'react';
import styled from 'styled-components';
import ImageManager from 'common/Manager/ImageManager';
import { Grid, Box } from '@material-ui/core';
import { SectionTour, ContainerTour, FilterBar } from '../../TourList/Desktop.style';
import SkelDeskFBar from './SkelDeskFBar';
import SkeletonDesktop from './SkeletonDesktop';

const LoadDesktop = () => {
  return (
    <>
      <BannerWrapper></BannerWrapper>
      <SectionTour>
        <ContainerTour>
          <FilterBar>
            <SkelDeskFBar />
          </FilterBar>
          <Box pt={2.5} pb={6} >
            <SkeletonDesktop />
          </Box>
        </ContainerTour>
      </SectionTour>
    </>
  );
}

const BannerWrapper = styled.section`
  align-items: center;
  background-color: #00000040;
  display: flex;
  min-height: 260px;
  padding-top: 40px;
  ::before {
    background-image: url(${ImageManager.default.images.common.BG2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 1279px) {
    min-height: 160px;
    padding-top: 0;
  }
`

export default LoadDesktop;