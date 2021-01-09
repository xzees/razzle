import React from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Container from 'common/src/components/UI/Container';
type Props = { stores?: RootStore };
const Search = inject('stores')(
  observer((props: Props) => {
    return (
      <>
        <Container>
          <div>Checkout Summary</div>
        </Container>
      </>
    );
  })
);

export default Search;
