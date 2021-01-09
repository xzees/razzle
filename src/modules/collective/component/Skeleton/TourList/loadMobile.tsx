import React from 'react';
import { Grid } from '@material-ui/core';
import { TourListFilterBox, ContainerTour, FilterBox, ResultBar, FilterBar, SectionTour } from '../../TourList/Mobile.style';
import SkelMobFBar from './SkelMobFBar';
import SkelMobSBar from './SkelMobSBar';
import SkeletonMobile from './SkeletonMobile';

const LoadMobile = () => {
  return (
    <>
      <TourListFilterBox>
        <ContainerTour>
          <FilterBox container>
            <Grid item xs={6}>
              <ResultBar >
                <SkelMobFBar />
                <SkelMobSBar />
              </ResultBar>
            </Grid>
            <Grid item xs={6}>
              <FilterBar ></FilterBar>
            </Grid>
          </FilterBox>
        </ContainerTour>
      </TourListFilterBox>
      <SectionTour>
        <ContainerTour>
          <SkeletonMobile />
        </ContainerTour>
      </SectionTour>
    </>
  );
}

export default LoadMobile;