import React, { FunctionComponent } from 'react';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import Desktop from '../layouts/Desktop';
import Mobile from '../layouts/Mobile';

const Content: FunctionComponent<any> = (props: any) => {
  return (
    <LayoutSwitcher
      desktopView={<Desktop {...props} />}
      mobileView={<Mobile {...props} />}
    />
  );
};

export default Content;
