import React from 'react'
import _ from 'lodash';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import LayoutDesktop from './Layout/LayoutDesktop';
import LayoutMobile from './Layout/LayoutMobile';

const Content = (props: any) => {

    return (
        <>
            <LayoutSwitcher 
                desktopView={<LayoutDesktop {...props} />}
                mobileView={<LayoutMobile {...props} />}
            />
        </>
    );
};

export default Content;