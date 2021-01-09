import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { AppImageResponsive } from 'common/components';
import Container from 'common/src/components/UI/Container';
import ImageManager from 'common/Manager/ImageManager';
import Heading from 'common/src/components/Heading';
import ModalScreen from '../../ModalScreen';
import EditSearch from '../EditSearch';
import {
  SearchToggleWrapper,
  SearchDetailWrapper,
  ImageWrapper,
  EditSearchButton,
  h1Style,
} from './Style';

type Props = {
  name: string;
};

const SearchToggle: FunctionComponent<Props> = ({ name }) => {
  return (
    <SearchToggleWrapper>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <SearchDetailWrapper>
              <Heading content={name} {...h1Style} />
              <ModalScreen
                title={'แก้ไขการค้นหา'}
                fullscreen
                buttonOpenModal={(props: any) => {
                  return (
                    <EditSearchButton onClick={props.onClick}>
                      {'แก้ไขการค้นหา'}
                    </EditSearchButton>
                  );
                }}
              >
                <EditSearch />
              </ModalScreen>
            </SearchDetailWrapper>
          </Grid>
          <Grid item xs={6}>
            <ImageWrapper>
              <AppImageResponsive
                src={ImageManager.default.images.hotel.fontHotel}
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </SearchToggleWrapper>
  );
};

export default SearchToggle;
