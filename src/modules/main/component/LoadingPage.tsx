import React from 'react'
import { FlexColumn } from 'common/components/Flex';
import { BeatLoader } from 'react-spinners';

import { SectionHeader } from 'common/containers/AppModern/appModern.style';
import ColorManager from 'common/Manager/ColorManager';

const LoadingPage = () => {
  return (
    <SectionHeader>
      <BeatLoader color={ColorManager.default.appColor} />
    </SectionHeader>
  )
}


export default LoadingPage