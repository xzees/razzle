import React, { FunctionComponent } from 'react';
import ButtonSelectQuantity from '../ButtonSelectQuantity';
import {
  PaxWrapper,
  SelectQuantityWrapper,
  PriceWrapper,
  PaxTypeText,
  PriceText,
  DiscountText,
} from './Style';

type Props = {
  pax: any;
  count: number;
  currency?: string;
};

const Pax: FunctionComponent<Props> = (props: Props) => {
  const { pax, count, currency } = props;

  const formatPaxType = (): string => {
    let paxType = pax?.paxType === 'ADULT' ? 'ผู้ใหญ่' : 'เด็ก';
    if (pax?.ageFrom === 0) paxType += ` (อายุต่ำกว่า ${pax?.ageTo} ปี)`;
    else if (pax?.ageTo >= 99) paxType += ` (อายุ ${pax?.ageFrom} ปีขึ้นไป)`;
    else paxType += ` (อายุ ${pax?.ageFrom} - ${pax?.ageTo} ปี)`;
    return paxType;
  };

  return (
    <PaxWrapper>
      <PaxTypeText>{formatPaxType()}</PaxTypeText>
      <PriceWrapper>
        <PriceText>{`${currency || 'THB'} ${(pax?.amount).toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
          }
        )}`}</PriceText>
        {pax?.amount !== 0 && (
          <DiscountText>
            {(699).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </DiscountText>
        )}
      </PriceWrapper>
      <SelectQuantityWrapper>
        <ButtonSelectQuantity paxType={formatPaxType()} amount={pax?.amount} />
      </SelectQuantityWrapper>
    </PaxWrapper>
  );
};

export default Pax;
