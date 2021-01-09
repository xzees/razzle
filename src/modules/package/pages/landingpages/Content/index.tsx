import React, { FunctionComponent } from 'react';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import Mobile from '../layouts/Mobile';
import Desktop from '../layouts/Desktop';

const Content: FunctionComponent<any> = (props: any) => {
  return (
    <LayoutSwitcher
      desktopView={<Desktop {...props} />}
      mobileView={<Mobile {...props} />}
    />
  );
};

export default Content;
