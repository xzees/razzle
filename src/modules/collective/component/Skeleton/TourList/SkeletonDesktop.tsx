import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { BoxMain, BoxTour, BoxTourImg, ImgBox, ImgCard, BoxTourContent } from '../../TourList/Desktop.style';

const SkeletonDesktop = () => {
  return (
    <BoxMain>
      <BoxTour className="Box-Tour">
        <BoxTourImg className="Box-Tour-Img">
          <ImgBox>
            <ImgCard>
              <Skeleton variant="rect" height={249} animation="wave" />
            </ImgCard>
          </ImgBox>
        </BoxTourImg>
        <BoxTourContent style={{ width: '100%' }} className="Box-Tour-Content">
          <Skeleton variant="rect" height={26} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="80%" height={26} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="80%" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={45} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="20%" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={80} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
        </BoxTourContent>
      </BoxTour>
      <BoxTour className="Box-Tour">
        <BoxTourImg className="Box-Tour-Img">
          <ImgBox>
            <ImgCard>
              <Skeleton variant="rect" height={249} animation="wave" />
            </ImgCard>
          </ImgBox>
        </BoxTourImg>
        <BoxTourContent style={{ width: '100%' }} className="Box-Tour-Content">
          <Skeleton variant="rect" height={26} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="80%" height={26} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="80%" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={45} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" width="20%" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
          <Skeleton variant="rect" height={80} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
        </BoxTourContent>
      </BoxTour>
    </BoxMain>
  );
}

export default SkeletonDesktop;