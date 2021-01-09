import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from 'common/src/components/UI/Container'
import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';
import BreadcrumbsInterface from 'modules/hotel/component/Breadcrumbs/BreadcrumbsInterface';
import {
    Containers,
    BreadcrumbsStype,
} from './Style';

const index = (props: BreadcrumbsInterface) => {
    
    return (
        <Containers>
            <Breadcrumbs 
                separator={<NavigateNextIcon fontSize="small" />} 
                aria-label="breadcrumb" 
                style={BreadcrumbsStype}
            >
                <Link color="inherit" href="/" >
                    {i18n.t('hotel.components.breadcrumbs.link1st')}
                </Link>
                <Link color="inherit" href="/">
                    {i18n.t('hotel.components.breadcrumbs.link2nd')}
                </Link>
                <Link color="inherit" href="/">
                    {props.name}
                </Link>
            </Breadcrumbs>
        </Containers>
    );
};

export default index;