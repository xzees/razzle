import React, {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import { 
  TextMobile, 
  DiscountDesktop,
  TextPrice,
  DiscountDiv,
  BoxPrice,
  BoxFlexRight
} from './Style';
import i18n from 'utilities/I18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Rerv from '../Resv';
import Sale from '../Sale';
import BlockModel from 'modules/hotel/models/BlockModel';
import { inject, observer } from 'mobx-react';
import ReservationModel from 'modules/hotel/models/ReservationModel';
import RootStore from 'stores';
//Plugin
import _ from 'lodash';

interface Iprop {
    isMobile: boolean;
    href: string;
    title?: string;
    discount?: any;
    randomMock?: string;
    block: BlockModel;
    stores?: RootStore;
}

const Btn = (props: any) => {
  return (
    <BoxFlexRight>
      <Rerv {...props}/>
    </BoxFlexRight>
  );
};

const Price = inject('stores')(
  observer((props: Iprop) => {
    const {
      isMobile,
      href,
      title,
      discount,
      block
    } = props;
    const uiStore = props.stores!.HotelRootStore;
    const hotels = uiStore.ReservationStore.hotels;
    const [price, setPrice] = useState<number>(block.incrementalPrice[0].price);
    

    const isLarge = useMediaQuery('(max-width: 959px)'); 

    const textMobileStyle = {
      width: '100%'
    };
    const textMobileStylePriceDetail = {
      width: '100%',
      marginBottom: '0.5rem'
    };
    const textMobileStylePrice = {
      marginBottom: (!isLarge ? '11px' : '11px')
    };

    useEffect(() => {
        if(block.selectedAmount > 0){
          setPrice(block.incrementalPrice[block.selectedAmount-1].price);
        }else{
          setPrice(block.incrementalPrice[0].price);
        }
    }, [hotels]);

    return (      
        <BoxPrice>
          <BoxFlexRight>
          {props.randomMock === 'S' && <Sale {...props} />}
          </BoxFlexRight>
          
          <BoxFlexRight>
              <TextMobile style={textMobileStyle}>{i18n.t('hotel.desktop.item.price.per.room.per.night')}</TextMobile>
          </BoxFlexRight>

          <BoxFlexRight>
            <TextMobile style={textMobileStylePriceDetail}>{i18n.t('hotel.desktop.item.price.detail')}</TextMobile>
          </BoxFlexRight>

          <Box width={'100%'} display={'flex'} textAlign={'right'}>
            <DiscountDiv>
              <DiscountDesktop>1,100</DiscountDesktop>
            </DiscountDiv>
          </Box>

          <BoxFlexRight>
            <TextPrice
              style={textMobileStylePrice}> 
              {i18n.t('hotel.components.roomlist.detail.thb')} 
              {price.toLocaleString()}
            </TextPrice>
          </BoxFlexRight>
          
          {/* {!isLarge && <Btn {...props} />} */}
          
      </BoxPrice>
    );
}));

export default Price;