import React from 'react';
import {
  UlDivInSideMobile,
  MLabel,
  ViewButton,
  UlDivInSideHistory,
  LiItem
} from 'modules/hotel/component/Autocomplete/Style'
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import PopularInterface from 'modules/hotel/component/Autocomplete/History/Popular/PopularInterface';

const Desktop = (props: PopularInterface) => {

    const {
        radius,
        cityPopular
    } = props;

    const funcMap = (v: any, index: number) => {
        return (
            <ViewButton key={index}>{v.tag}</ViewButton>
        );
    };

    return (
        <>
            <MLabel radius={radius.toString()}>
                {i18n.t('hotel.search.popular')}
            </MLabel>
            <UlDivInSideHistory radius={true}>
                <UlDivInSideMobile>
                    <LiItem > 
                        <Grid container={true} >
                            {cityPopular.map(funcMap)}
                        </Grid>
                    </LiItem>
                </UlDivInSideMobile>
            </UlDivInSideHistory>
        </>
    );
};

export default Desktop;