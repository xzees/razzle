import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import useToggle from 'modules/package/Hook/useToggle';
import Price from '../../Price';
import Option from '../Option';
import {
  ItemWrapper,
  TitleWrapper,
  BodyWrapper,
  ContentWrapper,
  DescriptionWrapper,
  PriceWrapper,
  ReadMoreWrapper,
  ButtonWrapper,
  NameText,
  ReadLessText,
  SelectButton,
} from './Style';

type Props = {
  isMobile: boolean;
  isLarge?: boolean;
  item: any;
  currency?: string;
  expanded: string | false;
  test: number;
  handleChange: (panel: string | false) => void;
};

const Item: FunctionComponent<Props> = (props: Props) => {
  const {
    isMobile,
    isLarge,
    item,
    currency,
    expanded,
    test,
    handleChange,
  } = props;

  const { toggle, handleOpen, handleClose } = useToggle();

  const paxAmounts = _.get(item, 'rates.0.rateDetails.0.paxAmounts', []);
  const paxAmountAdult = _.find(paxAmounts, { paxType: 'ADULT' });

  if (isMobile) {
    return (
      <ItemWrapper isMobile>
        <ContentWrapper isMobile>
          <TitleWrapper>
            <NameText>{item?.name}</NameText>
          </TitleWrapper>
          <DescriptionWrapper isShowMore={toggle}>
            {toggle ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `${_.get(item, 'comments.0.text')}  `,
                  }}
                />
                <ReadLessText onClick={handleClose}>อ่านน้อยลง</ReadLessText>
              </>
            ) : (
              <>
                <span>
                  {_.replace(_.get(item, 'comments.0.text'), /<[^>]+>/g, '')}
                </span>
                <ReadMoreWrapper>
                  <a role="button" onClick={handleOpen}>
                    ... อ่านเพิ่มเติม
                  </a>
                </ReadMoreWrapper>
              </>
            )}
          </DescriptionWrapper>
          <Option
            freeCancellation={_.get(item, 'rates.0.freeCancellation')}
            duration={item?.duration}
            test={test}
          />
        </ContentWrapper>
        <PriceWrapper isMobile>
          <Price
            isMobile={false}
            price={paxAmountAdult?.amount}
            discount={699}
            currency={currency}
            test={test}
          />
        </PriceWrapper>
        <SelectButton onClick={() => handleChange(item?.code)}>
          เลือก
        </SelectButton>
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper isMobile={false}>
      <TitleWrapper>
        <NameText>{item?.name}</NameText>
      </TitleWrapper>
      <BodyWrapper>
        <ContentWrapper isMobile={false} isLarge={isLarge}>
          <DescriptionWrapper isShowMore={toggle}>
            {toggle ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `${_.get(item, 'comments.0.text')}  `,
                  }}
                />
                <ReadLessText onClick={handleClose}>อ่านน้อยลง</ReadLessText>
              </>
            ) : (
              <>
                <span>
                  {_.replace(_.get(item, 'comments.0.text'), /<[^>]+>/g, '')}
                </span>
                <ReadMoreWrapper>
                  <a role="button" onClick={handleOpen}>
                    ... อ่านเพิ่มเติม
                  </a>
                </ReadMoreWrapper>
              </>
            )}
          </DescriptionWrapper>
          <Option
            freeCancellation={_.get(item, 'rates.0.freeCancellation')}
            duration={item?.duration}
            test={test}
          />
        </ContentWrapper>
        <PriceWrapper isMobile={false} isLarge={isLarge}>
          <Price
            isMobile={false}
            price={paxAmountAdult?.amount}
            discount={699}
            currency={currency}
            test={test}
          />
          {!isLarge && (
            <ButtonWrapper mt="8px">
              <SelectButton
                isBorderRadius
                onClick={() => handleChange(item?.code)}
              >
                เลือก
              </SelectButton>
            </ButtonWrapper>
          )}
        </PriceWrapper>
        {isLarge && (
          <ButtonWrapper mt="6px">
            <SelectButton
              isBorderRadius
              onClick={() => handleChange(item?.code)}
            >
              เลือก
            </SelectButton>
          </ButtonWrapper>
        )}
      </BodyWrapper>
    </ItemWrapper>
  );
};

export default Item;
