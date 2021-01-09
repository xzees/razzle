import React from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Container from 'common/src/components/UI/Container';
import Parampath from 'common/models/Parampath';
type Props = { stores?: RootStore; match?: Parampath; referencecode: string };
const Search = inject('stores')(
  observer((props: Props) => {
    // const { PaymentStores } = props.stores!.PackageRootStore;
    React.useEffect(() => {
      // PaymentStores.StatusConfirem(props.match?.params.referencecode)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    }, []);

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
