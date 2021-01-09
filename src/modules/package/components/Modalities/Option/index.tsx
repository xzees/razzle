import React, { FunctionComponent } from 'react';
import { OptionWrapper, TextWithIconWrapper } from './Style';
import { CoinIcon, VerifiedIcon } from '../../Icon';

type Props = {
  freeCancellation?: boolean;
  duration?: any;
  test: number;
};

const Option: FunctionComponent<Props> = ({
  freeCancellation,
  duration,
  test,
}) => {
  return (
    <OptionWrapper>
      <TextWithIconWrapper>
        <VerifiedIcon />
        {freeCancellation ? 'ยกเลิกได้ฟรี' : 'ไม่สามารถยกเลิกได้'}
      </TextWithIconWrapper>
      {duration && (
        <TextWithIconWrapper>
          <VerifiedIcon />
          {`ระยะเวลา: ${duration?.value} ${
            duration?.metric === 'DAYS' ? 'วัน' : duration?.metric
          }`}
        </TextWithIconWrapper>
      )}
      {test % 3 === 1 && (
        <TextWithIconWrapper color="brown">
          <CoinIcon />
          ได้รับส่วนลด COIN เพิ่มแล้ว 200 บาท
        </TextWithIconWrapper>
      )}
      {test % 3 === 2 && (
        <TextWithIconWrapper color="brown">
          <CoinIcon />
          สมัครสมาชิก หรือเข้าสู่ระบบเพื่อรับส่วนลด COIN เพิ่ม 100 บาท
        </TextWithIconWrapper>
      )}
    </OptionWrapper>
  );
};

export default Option;
