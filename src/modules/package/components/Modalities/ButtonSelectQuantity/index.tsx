import _ from 'lodash';
import React, { FunctionComponent, useContext, useEffect } from 'react';
import PaxesContext from 'modules/package/contexts/paxes';
import {
  RemoveCircleOutlineRoundedIcon,
  AddCircleOutlineRoundedIcon,
  ButtonSelectQuantityWrapper,
  CountText,
} from './Style';

type Props = {
  paxType: string;
  amount: number;
};

const ButtonSelectQuantity: FunctionComponent<Props> = ({
  paxType,
  amount,
}) => {
  const { paxes, handleChangeQuantity, clearQuantities } = useContext(
    PaxesContext
  );

  useEffect(() => {
    return () => clearQuantities();
  }, []);

  const pax = _.find(paxes, { paxType });

  const handleClickRemove = () => {
    handleChangeQuantity({
      paxType,
      count: pax ? pax.count - 1 : 0,
      amount,
    });
  };

  const handleClickAdd = () => {
    handleChangeQuantity({
      paxType,
      count: pax ? pax.count + 1 : 1,
      amount,
    });
  };

  return (
    <ButtonSelectQuantityWrapper>
      <RemoveCircleOutlineRoundedIcon
        onClick={handleClickRemove}
        disabled={!pax?.count}
      />
      <CountText>{pax?.count || 0}</CountText>
      <AddCircleOutlineRoundedIcon onClick={handleClickAdd} />
    </ButtonSelectQuantityWrapper>
  );
};

export default ButtonSelectQuantity;
