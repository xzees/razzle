import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import { Button } from 'common/components/Button';
import HeaderEditSearch from 'modules/package/components/HeaderEditSearch';
import HeaderSearch from 'modules/package/components/HeaderSearch';
import FilterBar from 'modules/package/components/FilterBar';
import Items from 'modules/package/components/Items';
import { Element } from 'react-scroll';
import { ContentSection, ButtonWrapper } from '../Styles/Desktop';

type Props = {
  textSearch: string;
  items: any[];
  isLoading: boolean;
  dataComplete: boolean;
  sorting: Sorting;
  filter: FilterTest;
  isLoadingHeaderSearch: boolean;
  handleLoadMore: () => void;
  handleChangeSorting: (sorting: any) => void;
  handleChangeFilter: (filter: FilterTest | null) => void;
};

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const {
    textSearch,
    items,
    isLoading,
    dataComplete,
    sorting,
    filter,
    isLoadingHeaderSearch,
    handleLoadMore,
    handleChangeSorting,
    handleChangeFilter,
  } = props;

  return (
    <>
      <Element name="element-scroll" />
      {!isLoadingHeaderSearch && <HeaderEditSearch />}
      <HeaderSearch
        name={textSearch}
        sorting={sorting}
        isMobile={false}
        onChangeSorting={(event: any, newValue: Sorting) =>
          handleChangeSorting(newValue)
        }
      />
      <ContentSection>
        <Container>
          <Grid container spacing={4}>
            <Grid item sm={4} md={3} lg={3}>
              <FilterBar
                isMobile={false}
                filter={filter}
                onChangeFilter={(
                  event: React.ChangeEvent<any>,
                  newValue: FilterTest | null
                ) => handleChangeFilter(newValue)}
              />
            </Grid>
            <Grid item sm={8} md={9} lg={9}>
              <Items items={items} isLoading={isLoading} isMobile={false} />
            </Grid>
            {!isLoading && !dataComplete && (
              <>
                <Grid item sm={4} md={4} lg={3}></Grid>
                <Grid item sm={8} md={8} lg={9}>
                  <ButtonWrapper>
                    <Button
                      variant="outlined"
                      width="auto"
                      onClick={(event) => handleLoadMore()}
                    >
                      ดูเพิ่มเติม
                    </Button>
                  </ButtonWrapper>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </ContentSection>
    </>
  );
};

export default Desktop;
