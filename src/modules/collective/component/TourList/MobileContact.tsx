import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import Container from 'common/src/components/UI/Container';
import { AppImage, FlexRow } from 'common/components';
import ColorManager from 'common/Manager/ColorManager';
import { Grid } from '@material-ui/core';
import { FormatListBulletedRounded } from '@material-ui/icons';

type Props = { category?: any; toggleDrawer?: any; }

const MobileContact = (props: Props) => {
  const {
    category,
    toggleDrawer
  } = props;

  return (
    <ButtomBottom>
      <ContainerBB>
        <Grid container >
          {category?.length > 0 ? (
            <GridButton item xs={3}>
              <ButtonDiv onClick={toggleDrawer}>
                <FormatListBulletedRounded fontSize="small" style={{ marginBottom: '-2px' }} />
                <span>{i18n.t('collective.list.catebar.category')}</span>
              </ButtonDiv>
            </GridButton>
          ) : null}
          <GridButton item xs={category?.length > 0 ? 3 : 4}>
            <a rel="noreferrer" href="tel:021719999" target="_blank" id="icon-tl-m-phone" >
              <svg width="22" height="22" viewBox="0 0 480.56 480.56" >
                <g>
                  <path d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8 c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4 c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8 c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3 c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9 c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"></path>
                  <path d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1 c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"></path>
                  <path d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5 l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"></path>
                </g>
              </svg>
              <span>{i18n.t('collective.list.catebar.tel')}</span>
            </a>
          </GridButton>
          <GridButton item xs={category?.length > 0 ? 3 : 4}>
            <MsgLink rel="noreferrer" href="https://m.me/thaitravelcenter" target="_blank" id="icon-tl-m-facebook" >
              <AppImage visibleByDefault width={24} height={24} src="https://assets.thaitravelcenter.com/development/web/common/sharebutton-icon.svg" />
              <span>{i18n.t('collective.list.catebar.chat')}</span>
            </MsgLink>
          </GridButton>
          <GridButton item xs={category?.length > 0 ? 3 : 4}>
            <LineLink rel="noreferrer" href="https://line.me/ti/p/@thaitravelcenter" target="_blank" id="icon-tl-m-line" >
              <LineIcon width="24" height="24" viewBox="0 0 50 50" >
                <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
              </LineIcon>
              <span>{i18n.t('collective.list.catebar.line')}</span>
            </LineLink>
          </GridButton>
        </Grid>
      </ContainerBB>
    </ButtomBottom>
  );
}

const ButtomBottom = styled.div`
  background: ${ColorManager.default.white};
  bottom: 0;
  box-shadow: 0px -1px 4px 0px ${ColorManager.default.greyColor};
  position: fixed;
  width: 100%;
  z-index: 110;
`;
export const ContainerBB = styled(Container)`
  align-items: center;
  display: flex;
  height: 60px;
  width: 100%;
  @media(max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px
  }
`;
const GridButton = styled(Grid)`
  text-align: center;
  a {
    display: inherit;
    margin: 12px 0 6px 0;
  }
  svg {
    fill: ${ColorManager.default.primaryColor};
    font-size: 24px;
  }
  span {
    color: ${ColorManager.default.black};
    display: block;
    font-size: 17px;
    margin-top: -6px;
  }
`;
const ButtonDiv = styled.div`
  cursor: pointer;
  display: inherit;
  margin: 12px 0 6px 0;
`;
const MsgLink = styled.a`
  margin: 10px 0 6px 0 !important;
`;
const LineLink = styled.a`
  margin: 10px 0 6px 0 !important;
`;
const LineIcon = styled.svg`
  fill: ${ColorManager.default.line} !important;
`;

export default MobileContact;