import React, { FunctionComponent } from 'react';
import { Button } from 'common/components/Button';
import Container from 'common/src/components/UI/Container';
import HeaderSearch from 'modules/package/components/HeaderSearch';
import Items from 'modules/package/components/Items';
import { ContentSection, ButtonWrapper } from '../Styles/Mobile';

type Props = {
  textSearch: string;
  items: any[];
  open: boolean;
  isLoading: boolean;
  dataComplete: boolean;
  sorting: Sorting;
  filter: FilterTest;
  handleLoadMore: () => void;
  handleChangeSorting: (sorting: Sorting) => void;
  handleChangeFilter: (filter: FilterTest | null) => void;
};

const Mobile: FunctionComponent<Props> = (props: Props) => {
  const {
    textSearch,
    items,
    isLoading,
    dataComplete,
    sorting,
    filter,
    handleLoadMore,
    handleChangeSorting,
    handleChangeFilter,
  } = props;

  return (
    <>
      <HeaderSearch
        name={textSearch}
        sorting={sorting}
        filter={filter}
        isMobile
        onChangeSorting={(event: any, newValue: Sorting) =>
          handleChangeSorting(newValue)
        }
        onChangeFilter={(event: any, newValue: FilterTest | null) =>
          handleChangeFilter(newValue)
        }
      />
      <ContentSection>
        <Container>
          <Items items={items} isLoading={isLoading} isMobile />
          {!isLoading && !dataComplete && (
            <ButtonWrapper>
              <Button
                variant="outlined"
                width="auto"
                onClick={(event) => handleLoadMore()}
              >
                ดูเพิ่มเติม
              </Button>
            </ButtonWrapper>
          )}
        </Container>
      </ContentSection>
    </>
  );
};

export default Mobile;
