import React, { FunctionComponent } from 'react';
import Container from 'common/src/components/UI/Container';
import { Button } from 'common/components/Button';

type Props = {
  modality: any;
  checkout: () => void;
};

const Desktop: FunctionComponent<Props> = (props: Props) => {
  // Data
  const { modality } = props;

  // Function
  const { checkout } = props;

  return (
    <Container>
      <Button onClick={(event) => checkout()} disabled={!modality}>
        ชำระเงิน
      </Button>
    </Container>
  );
};

export default Desktop;
