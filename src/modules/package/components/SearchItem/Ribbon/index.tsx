import React, { FunctionComponent } from 'react';
import { RibbonWrapper, Text } from './Style';

type Props = {
  isMobile: boolean;
  test: number;
};

const Ribbon: FunctionComponent<Props> = ({ isMobile, test }) => {
  return (
    <>
      <RibbonWrapper top={isMobile ? '14px' : '19px'}>
        <Text fontSize="10px" lineHeight="0.7">
          ประหยัดไป
        </Text>
        <Text fontSize="17px" lineHeight="0.7" letterSpacing="0.2px" mt="2px">
          SAVE
        </Text>
        <Text fontWeight="medium" fontSize="22px" lineHeight="0.7" mt="6px">
          -400
        </Text>
      </RibbonWrapper>
      {test % 3 === 1 && (
        <RibbonWrapper top={isMobile ? '74px' : '79px'} backgroundColor="brown">
          <Text fontSize="19px" lineHeight="0.7" letterSpacing="0.38px">
            GET
          </Text>
          <Text
            fontWeight="medium"
            fontSize="15px"
            lineHeight="0.7"
            letterSpacing="0.18px"
            mt="1px"
          >
            COIN
          </Text>
          <Text fontWeight="medium" fontSize="22px" lineHeight="0.7" mt="3px">
            -200
          </Text>
        </RibbonWrapper>
      )}
      {test % 3 === 2 && (
        <RibbonWrapper top={isMobile ? '74px' : '79px'} backgroundColor="brown">
          <Text fontSize="12px" lineHeight="0.7" letterSpacing="0.24px">
            ส่วนลด
          </Text>
          <Text
            fontWeight="medium"
            fontSize="15px"
            lineHeight="0.7"
            letterSpacing="0.18px"
            mt="1px"
          >
            COIN
          </Text>
          <Text fontWeight="medium" fontSize="22px" lineHeight="0.7" mt="3px">
            -200
          </Text>
        </RibbonWrapper>
      )}
    </>
  );
};

export default Ribbon;
