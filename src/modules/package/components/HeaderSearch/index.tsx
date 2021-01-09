import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import Map from 'assets/images/map.jpg';
import SearchDetail from './SearchDetail';
import SearchToggle from './SearchToggle';
import FilterBar from '../FilterBar';
import { HeaderSearchSection, MapWrapper } from './Style';

type Props = {
  name: string;
  sorting: Sorting;
  filter?: FilterTest;
  isMobile: boolean;
  onChangeSorting: (event: React.ChangeEvent<any>, newValue: Sorting) => void;
  onChangeFilter?: (
    event: React.ChangeEvent<any>,
    newValue: FilterTest | null
  ) => void;
};

const HeaderSearch: FunctionComponent<Props> = (props: Props) => {
  const {
    name,
    sorting,
    filter,
    isMobile,
    onChangeSorting,
    onChangeFilter,
  } = props;

  if (isMobile) {
    return (
      <>
        <SearchToggle name={name} />
        <FilterBar
          isMobile
          sorting={sorting}
          filter={filter}
          onChangeSorting={onChangeSorting}
          onChangeFilter={onChangeFilter}
        />
      </>
    );
  }

  return (
    <HeaderSearchSection>
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={4} md={3} lg={3}>
            <MapWrapper>
              <img src={Map} alt="" style={{ width: '100%' }} />
            </MapWrapper>
          </Grid>
          <Grid item sm={8} md={9} lg={9}>
            <SearchDetail
              title={name}
              sorting={sorting}
              onChangeSorting={onChangeSorting}
            />
          </Grid>
        </Grid>
      </Container>
    </HeaderSearchSection>
  );
};

export default HeaderSearch;
