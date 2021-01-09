import React, { FunctionComponent } from 'react';
import Container from 'common/src/components/UI/Container';
import SearchDestination from '../SearchDestination';
import { HeaderEditSearchSection } from './Style';

type Props = {};

const HeaderEditSearch: FunctionComponent<Props> = () => {
  return (
    <HeaderEditSearchSection>
      <Container>
        <SearchDestination
          isMobile={false}
          isOpacity
          width="677px"
          spacing={4}
          autoCompleteSearchProps={{
            xs: 5,
          }}
          dateRangePickerProps={{
            xs: 5,
          }}
          searchButtonProps={{
            xs: 2,
          }}
        />
      </Container>
    </HeaderEditSearchSection>
  );
};

export default HeaderEditSearch;
