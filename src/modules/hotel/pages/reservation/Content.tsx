import React from 'react'
import _ from 'lodash';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import Layout from './Layout';

const Content = (props: any) => {

    return (
        <>
            <LayoutSwitcher 
                desktopView={<Layout {...props} isMobile={false} />}
                mobileView={<Layout {...props} isMobile={true} />}
            />
            
        </>
    );
};

export default Content;