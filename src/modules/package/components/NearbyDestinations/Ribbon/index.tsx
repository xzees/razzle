import React, { FunctionComponent } from 'react';
import { RibbonWrapper, Text } from './Style';

type Props = {
  isMobile: boolean;
  test: number;
};

const Ribbon: FunctionComponent<Props> = ({ isMobile, test }) => {
  return (
    <>
      {test % 4 !== 2 && (
        <RibbonWrapper
          top={isMobile ? '13px' : '22px'}
          width={isMobile ? '32.1px' : '51px'}
          height={isMobile ? '34px' : '52px'}
          p={isMobile ? '5px 8px 7px 4.1px' : '7px 12px 9px 7px'}
        >
          <Text fontSize={isMobile ? '6px' : '10px'} lineHeight="0.7">
            {isMobile ? 'ประหยัด' : 'ประหยัดไป'}
          </Text>
          <Text
            fontSize={isMobile ? '10.5px' : '17px'}
            lineHeight="0.7"
            letterSpacing={isMobile ? '0.13px' : '0.2px'}
            mt={isMobile ? '1px' : '2px'}
          >
            SAVE
          </Text>
          <Text
            fontWeight="medium"
            fontSize={isMobile ? '13.5px' : '22px'}
            lineHeight="0.7"
            mt={isMobile ? '4px' : '6px'}
          >
            -400
          </Text>
        </RibbonWrapper>
      )}
      {test % 4 === 1 && (
        <RibbonWrapper
          top={isMobile ? '52px' : '84px'}
          width={isMobile ? '32.1px' : '51px'}
          height={isMobile ? '34px' : '52px'}
          p={isMobile ? '5px 8px 7px 4.1px' : '7px 12px 9px 7px'}
          backgroundColor="brown"
        >
          <Text
            fontSize={isMobile ? '12px' : '19px'}
            lineHeight="0.7"
            letterSpacing={isMobile ? '0.24px' : '0.38px'}
          >
            GET
          </Text>
          <Text
            fontWeight="medium"
            fontSize={isMobile ? '9.5px' : '15px'}
            lineHeight="0.7"
            letterSpacing={isMobile ? '0.11px' : '0.18px'}
            mt="1px"
          >
            COIN
          </Text>
          <Text
            fontWeight="medium"
            fontSize={isMobile ? '13.5px' : '22px'}
            lineHeight="0.7"
            mt={isMobile ? '2px' : '3px'}
          >
            -200
          </Text>
        </RibbonWrapper>
      )}
      {test % 4 === 3 && (
        <RibbonWrapper
          top={isMobile ? '52px' : '84px'}
          width={isMobile ? '32.1px' : '51px'}
          height={isMobile ? '34px' : '52px'}
          p={isMobile ? '5px 8px 7px 4.1px' : '7px 12px 9px 7px'}
          backgroundColor="brown"
        >
          <Text
            fontSize={isMobile ? '8px' : '12px'}
            lineHeight="0.7"
            letterSpacing={isMobile ? '0.13px' : '0.24px'}
          >
            ส่วนลด
          </Text>
          <Text
            fontWeight="medium"
            fontSize={isMobile ? '9.5px' : '15px'}
            lineHeight="0.7"
            letterSpacing={isMobile ? '0.11px' : '0.18px'}
            mt="1px"
          >
            COIN
          </Text>
          <Text
            fontWeight="medium"
            fontSize={isMobile ? '13.5px' : '22px'}
            lineHeight="0.7"
            mt={isMobile ? '2px' : '3px'}
          >
            -200
          </Text>
        </RibbonWrapper>
      )}
    </>
  );
};

export default Ribbon;
