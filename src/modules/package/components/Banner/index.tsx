import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ImageManager from 'common/Manager/ImageManager';
import Heading from 'common/src/components/Heading';
import { Grid } from '@material-ui/core';
import {
  AppImages,
  Containers as ContainerA,
  ThemeDesktop,
  ContainerSearch,
} from './Style';
import SearchForm from '../SearchForm';

type Props = {
  title: string;
  detail: string;
  detailTwo?: string;
  open: any;
  setOpen: any;
  [key: string]: any;
  btnSearch: any;
};

type HiddenFormSearchProps = Pick<Props, 'open' | 'btnSearch'>;

export const HiddenFormSearch: FunctionComponent<HiddenFormSearchProps> = ({
  open,
  btnSearch,
}) => {
  return (
    <>
      {open && (
        <ContainerSearch>
          <Grid container spacing={1}>
            <SearchForm Theme={ThemeDesktop} btnSearch={btnSearch} />
          </Grid>
        </ContainerSearch>
      )}
    </>
  );
};

const Banner: FunctionComponent<Props> = (props: Props) => {
  // Data
  const { open, btnSearch, title, detail, detailTwo } = props;

  // Function
  const { setOpen } = props;

  const click = () => setOpen(!open);

  return (
    <>
      <BannerWrapper>
        <ContainerA>
          <Grid container>
            <Grid xs={6} item>
              <Heading content={title} {...h1Style} />
              <Detail>{detail}</Detail>
              <Detail>{detailTwo}</Detail>
            </Grid>
            <Grid
              xs={6}
              item
              style={{
                display: 'flex',
                flexFlow: 'row-reverse',
              }}
            >
              <DivDetail>
                <AppImages
                  height={50}
                  onClick={click}
                  src={ImageManager.default.images.hotel.magnifying}
                />
                <DetailRight onClick={click}>
                  {!open && 'ค้นหาใหม่'}
                  {open && 'ซ่อน'}
                </DetailRight>
              </DivDetail>
            </Grid>
          </Grid>
        </ContainerA>
      </BannerWrapper>
      <HiddenFormSearch open={open} btnSearch={btnSearch} />
    </>
  );
};

const h1Style = {
  as: 'h1',
  color: '#fff',
  fontSize: ['29px', '31px', '35px', '45px', '53px'],
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
  mt: '20px',
  textAlign: 'left',
  marginTop: 0,
};
const DivDetail = styled.div`
  width: 61px;
  text-align: center;
`;
const Detail = styled.p`
  color: #fff;
  font-size: 23px;
  margin: 0;
  text-align: left;
`;
const DetailRight = styled.p`
  color: #fff;
  font-size: 23px;
  margin: 0;
`;

const BannerWrapper = styled.section`
  align-items: center;
  background-color: #00000040;
  min-height: 240px;
  padding-top: 99px;
  ::before {
    background-color: #440099;
    content: '';
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 1279px) {
    min-height: 140px;
    padding-top: 20px;
  }
`;

export default Banner;
