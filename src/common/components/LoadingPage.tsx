import React from 'react'
import { FlexColumn } from 'common/components/Flex';
import { BeatLoader } from 'react-spinners';
import ColorManager from 'common/Manager/ColorManager';

const LoadingPage = () => {
  return (
    <FlexColumn centerX centerY className='mt-5 mb-5'>
      <BeatLoader color={ColorManager.default.appColor} />
    </FlexColumn>
  )
}


export default LoadingPage