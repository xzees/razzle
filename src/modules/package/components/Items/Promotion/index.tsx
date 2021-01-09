import React, { FunctionComponent } from 'react';
import Heading from 'common/src/components/Heading';
import { TagIcon } from '../../Icon';
import {
  DetailWrapper,
  GetDiscountButton,
  PromotionWrapper,
  PromotionContentWrapper,
  ContentWrapper,
  Circle,
  Coupon,
  titleDesktopStyle,
  titleMobileStyle,
} from './Style';

type Props = {
  isMobile: boolean;
};

const Promotion: FunctionComponent<Props> = ({ isMobile }) => {
  return (
    <PromotionWrapper isMobile={isMobile}>
      <PromotionContentWrapper isMobile={isMobile}>
        <ContentWrapper isMobile={isMobile}>
          <Circle isMobile={isMobile}>
            <TagIcon
              width={isMobile ? '29px' : '41px'}
              height={isMobile ? '28.3px' : '41px'}
            />
          </Circle>
          <DetailWrapper isMobile={isMobile}>
            <Heading
              content="ยินดีด้วย! จองกิจกรรมภายในวันนี้รับส่วนลด 10%"
              {...(isMobile ? titleMobileStyle : titleDesktopStyle)}
            />
            <Coupon isMobile={isMobile}>
              จองกิจกรรมราคาพิเศษได้ง่ายๆ แค่กดรับคูปองส่วนลดนี้
            </Coupon>
          </DetailWrapper>
        </ContentWrapper>
        {!isMobile && <GetDiscountButton>รับคูปองส่วนลด</GetDiscountButton>}
      </PromotionContentWrapper>
    </PromotionWrapper>
  );
};

export default Promotion;
