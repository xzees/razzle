import { ErrorRounded } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import {
  PriceWrapper,
  Text,
  Discount,
  Amount,
  DiscountWrapper,
  SaleWrapper,
  Sale,
} from './Style';

type Props = {
  isMobile: boolean;
  href?: string;
  price: number;
  discount: number;
  currency?: string;
  isLarge?: boolean;
  test: number;
};

const Price: FunctionComponent<Props> = (props: Props) => {
  const { isMobile, href, price, discount, currency, isLarge, test } = props;

  return (
    <>
      {test % 3 === 2 && (
        <SaleWrapper>
          <Sale>
            ประหยัดได้อีก 10%{' '}
            <ErrorRounded
              fontSize="small"
              style={{ verticalAlign: 'middle' }}
            />
          </Sale>
        </SaleWrapper>
      )}
      <Text isMobile={isMobile}>ราคาต่อกิจกรรม/ต่อคน</Text>
      <Text isMobile={isMobile}>รวมภาษีและค่าธรรมเนียมแล้ว</Text>
      <PriceWrapper isMobile={isMobile} isLarge={isLarge}>
        <DiscountWrapper isMobile={isMobile}>
          <Discount isMobile={isMobile}>
            {discount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Discount>
        </DiscountWrapper>
        {isMobile ? (
          <a href={href} target="_blank">
            <Amount isMobile={isMobile}>
              {`${currency || 'THB'} ${price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`}
            </Amount>
          </a>
        ) : (
          <Amount isMobile={isMobile}>
            {`${currency || 'THB'} ${price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
          </Amount>
        )}
      </PriceWrapper>
    </>
  );
};

export default Price;
