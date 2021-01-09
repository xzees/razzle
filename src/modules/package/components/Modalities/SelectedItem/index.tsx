import _ from 'lodash';
import React, { FunctionComponent, useContext } from 'react';
import NavigationManager from 'common/Manager/NavigationManager';
import PaxesContext from 'modules/package/contexts/paxes';
import Option from '../Option';
import Pax from '../Pax';
import {
  ItemWrapper,
  TitleWrapper,
  DescriptionWrapper,
  PaxesWrapper,
  ActionWrapper,
  TotalWrapper,
  AmountWrapper,
  NameText,
  TotalAmountLabel,
  TotalAmountText,
  TotalDiscountText,
  BookingButton,
  BookingNowButton,
  ButtonChangePackageLink,
} from './Style';

type Props = {
  isMobile: boolean;
  item: any;
  currency?: string;
  test: number;
  addToCart: (modalityCartDetail: ModalityCartDetail) => void;
  handleChange: (panel: string | false) => void;
};

const SelectedItem: FunctionComponent<Props> = (props: Props) => {
  const { isMobile, item, currency, test, addToCart, handleChange } = props;

  const { paxes } = useContext(PaxesContext);

  const paxAmounts = _.get(item, 'rates.0.rateDetails.0.paxAmounts', []);
  const totalAmount = _.sumBy(paxes, (pax: Pax) => pax.amount * pax.count);

  if (isMobile) {
    return (
      <ItemWrapper>
        <TitleWrapper>
          <NameText>{item?.name}</NameText>
          <ButtonChangePackageLink
            role="button"
            onClick={() => handleChange(false)}
          >
            เปลี่ยนตัวเลือก
          </ButtonChangePackageLink>
        </TitleWrapper>
        <PaxesWrapper>
          {_.map(paxAmounts, (pax: any, index: number) => {
            return (
              <Pax pax={pax} count={index === 0 ? 0 : 1} currency={currency} />
            );
          })}
        </PaxesWrapper>
        {!_.every(paxes, { count: 0 }) && (
          <TotalWrapper isMobile>
            <TotalAmountLabel>ยอดรวม</TotalAmountLabel>
            <AmountWrapper>
              <TotalDiscountText isMobile>
                {(699).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </TotalDiscountText>
              <TotalAmountText>{`${
                currency || 'THB'
              } ${totalAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`}</TotalAmountText>
            </AmountWrapper>
          </TotalWrapper>
        )}
        <ActionWrapper>
          <BookingButton
            isMobile
            onClick={() => addToCart({ code: item?.code, name: item?.name })}
          >
            จองกิจกรรม
          </BookingButton>
          <BookingNowButton
            isMobile
            onClick={() => NavigationManager.redirectTo('/package/checkout')}
          >
            จองตอนนี้
          </BookingNowButton>
        </ActionWrapper>
        <DescriptionWrapper
          dangerouslySetInnerHTML={{
            __html: `${_.get(item, 'comments.0.text')}  `,
          }}
        />
        <Option
          freeCancellation={_.get(item, 'rates.0.freeCancellation')}
          duration={item?.duration}
          test={test}
        />
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper>
      <TitleWrapper>
        <NameText>{item?.name}</NameText>
        <ButtonChangePackageLink
          role="button"
          onClick={() => handleChange(false)}
        >
          เปลี่ยนตัวเลือก
        </ButtonChangePackageLink>
      </TitleWrapper>
      <PaxesWrapper>
        {_.map(paxAmounts, (pax: any, index: number) => {
          return (
            <Pax pax={pax} count={index === 0 ? 0 : 1} currency={currency} />
          );
        })}
      </PaxesWrapper>
      <ActionWrapper>
        {!_.every(paxes, { count: 0 }) && (
          <TotalWrapper isMobile={false}>
            <TotalAmountLabel>ยอดรวม</TotalAmountLabel>
            <AmountWrapper>
              <TotalAmountText>{`${
                currency || 'THB'
              } ${totalAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`}</TotalAmountText>
              <TotalDiscountText isMobile={false}>
                {(699).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </TotalDiscountText>
            </AmountWrapper>
          </TotalWrapper>
        )}
        <BookingButton
          isMobile={false}
          onClick={() => addToCart({ code: item?.code, name: item?.name })}
        >
          จองกิจกรรม
        </BookingButton>
        <BookingNowButton
          isMobile={false}
          onClick={() => NavigationManager.redirectTo('/package/checkout')}
        >
          จองตอนนี้
        </BookingNowButton>
      </ActionWrapper>
      <DescriptionWrapper
        dangerouslySetInnerHTML={{
          __html: `${_.get(item, 'comments.0.text')}  `,
        }}
      />
      <Option
        freeCancellation={_.get(item, 'rates.0.freeCancellation')}
        duration={item?.duration}
        test={test}
      />
    </ItemWrapper>
  );
};

export default SelectedItem;
