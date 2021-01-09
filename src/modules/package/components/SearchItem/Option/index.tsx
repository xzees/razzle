import React, { FunctionComponent } from 'react';
import { OptionWrapper, TextWithIconWrapper } from './Style';
import { CoinIcon, VerifiedIcon } from '../../Icon';

type Props = {
  isMobile: boolean;
  test: number;
};

const Option: FunctionComponent<Props> = ({ isMobile, test }) => {
  return (
    <OptionWrapper isMobile={isMobile}>
      <TextWithIconWrapper isMobile={isMobile}>
        <VerifiedIcon />
        ชำระเงิน ณ จุดนัดหมาย
      </TextWithIconWrapper>
      <TextWithIconWrapper isMobile={isMobile}>
        <VerifiedIcon />
        ยกเลิกได้ฟรี
      </TextWithIconWrapper>
      {test % 3 === 1 && (
        <TextWithIconWrapper isMobile={isMobile} color="brown">
          <CoinIcon />
          ได้รับส่วนลด COIN เพิ่มแล้ว 200 บาท
        </TextWithIconWrapper>
      )}
      {test % 3 === 2 && (
        <TextWithIconWrapper isMobile={isMobile} color="brown">
          <CoinIcon />
          สมัครสมาชิก หรือเข้าสู่ระบบเพื่อรับส่วนลด COIN เพิ่ม 100 บาท
        </TextWithIconWrapper>
      )}
    </OptionWrapper>
  );
};

export default Option;
