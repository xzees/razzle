import React from 'react';
import { 
    RatingMobile,
    BoxDesktop,
    RatingNotfind
} from './Style';
import { Box } from '@material-ui/core';

const Rating = (props: any) => {
    const {
        rating,
        city_name,
        isMobile,
    } = props;

    return (
        <RatingMobile
            name="tour-rating" 
            value={rating} 
            max={5}
            emptyIcon={<></>}
            readOnly={true}
        />
    );
};

const index = (props: any) => {
    const {
        rating,
        city_name,
        isMobile,
    } = props;

    return (
        <Box>
            <BoxDesktop>
                {rating != 0 && <Rating {...props} />}
                {rating === 0 && <RatingNotfind  />}
            </BoxDesktop>
        </Box>
    );
};

export default index;