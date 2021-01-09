import React from 'react';
import FilterBar from 'modules/hotel/component/FilterBar';
import _ from 'lodash';
import Header from './Header/Desktop';
import Items from './Items';
import { Grid } from '@material-ui/core';
import {
    SectionDesktop,
    Containers,
    styleGrid
} from 'modules/hotel/component/SearchHotel/Style';
import Scroll from 'react-scroll';
import qs from 'query-string';
import Location from 'modules/hotel/interface/Component/Location';

const Desktop = (props: Location): JSX.Element => {

    const param: any = qs.parse(props.location.search);
    const Element = Scroll.Element;

    return (
        <>
            <Header {...props} />
            <SectionDesktop>
                <Containers>
                    <Element name="beginItem" />
                    <Grid
                        container={true}
                        spacing={4}
                        style={styleGrid}
                    >
                        <Grid item={true} xs={3}>
                            <FilterBar
                                location={props.location}
                                isMobile={false}
                                latitude={param.latitude}
                                longitude={param.longitude}
                            />
                        </Grid>

                        <Grid item={true} xs={9}>
                            <Items
                                {...props}
                                isMobile={false}
                            />
                        </Grid>
                    </Grid>
                </Containers>
            </SectionDesktop>
        </>
    );
};

export default Desktop;