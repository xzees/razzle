import React from 'react';
import { Box } from '@material-ui/core';
import {
  TextMobile,
  DiscountDesktop,
  TextPrice,
  DiscountMobile,
  DiscountDiv,
  BoxPrice,
  TextPriceM,
  BoxFlexRight,
} from 'modules/hotel/component/SearchHotel/Price/Style';
import i18n from 'utilities/I18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Rerv from 'modules/hotel/component/SearchHotel/Resv';
import Sale from 'modules/hotel/component/SearchHotel/Sale';
import FontManager from 'modules/hotel/Manager/FontManager';
import PriceInterface from 'modules/hotel/component/SearchHotel/Price/PriceInterface';

const IsLargeBoxFlexRight = (props: PriceInterface) => {
  return (
      <BoxFlexRight>
        <Rerv onClick={props.onClick} />
      </BoxFlexRight>
  );
};

const Price = (props: PriceInterface) => {
  const { isMobile } = props;
  const isLarge = useMediaQuery('(max-width: 959px)');

  if (isMobile) {
   
    return (
      <>
        { <Sale {...props} /> }

        <TextMobile
          fontSize={FontManager.default.TEXT_TINY_EXTRA_17}
          lineHeight={'0.8'}
        >
          {i18n.t('hotel.desktop.item.price.per.room.per.night')}
        </TextMobile>
        <TextMobile fontSize={FontManager.default.TEXT_TINY_EXTRA_17}>
          {i18n.t('hotel.desktop.item.price.detail')}
        </TextMobile>
        <TextMobile 
          margin={'0px'}
          display={'block'}
        >
          <DiscountMobile>1,100</DiscountMobile>
          <TextPriceM> {i18n.t('hotel.components.roomlist.detail.thb')} {props.price?.toLocaleString()}</TextPriceM>
        </TextMobile>
      </>
    );
  }

  return (
    <BoxPrice>
      <BoxFlexRight>
        {<Sale {...props}  /> }
      </BoxFlexRight>
      <BoxFlexRight>
        <TextMobile width={'100%'} >
          {i18n.t('hotel.desktop.item.price.per.room.per.night')}
        </TextMobile>
      </BoxFlexRight>
      <BoxFlexRight>
        <TextMobile
          width={'100%'}
          marginBottom={'0.5rem'}
        >
          {i18n.t('hotel.desktop.item.price.detail')}
        </TextMobile>
      </BoxFlexRight>

      <Box width={'100%'} display={'flex'} textAlign={'right'}>
        <DiscountDiv>
          <DiscountDesktop>1,100</DiscountDesktop>
        </DiscountDiv>
      </Box>

      <BoxFlexRight>
        <TextPrice marginBottom={(!isLarge ? '1rem' : '5px')}>
          {' '}
          {i18n.t('hotel.components.roomlist.detail.thb')} {props.price?.toLocaleString()}
        </TextPrice>
      </BoxFlexRight>
      {!isLarge && <IsLargeBoxFlexRight {...props} />}
    </BoxPrice>
  );
};

export default Price;
