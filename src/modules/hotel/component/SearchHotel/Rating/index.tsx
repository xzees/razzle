import React from 'react';
import { 
    RatingMobile,
    BoxDesktop,
    BoxMobile,
    RatingNotfind
} from 'modules/hotel/component/SearchHotel/Rating/Style';
import ColorManager from 'common/Manager/ColorManager';
import { Box } from '@material-ui/core';
import RatingInterface from 'modules/hotel/component/SearchHotel/Rating/RatingInterface'

const Rate = (props: any) => {
    return (
        <RatingMobile
            name={'tour-rating'} 
            value={props.rating}
            max={5}
            emptyIcon={<></>}
            readOnly={true}
            color={props.color}
        />
    );
};

const index = (props: RatingInterface) => {
    const {
        rating,
        isMobile,
    } = props;

    if (isMobile) {
        return (
        <>
            <BoxMobile>
                {rating !== 0 && <Rate color={ColorManager.default.yellowColor} rating={rating} />}
            </BoxMobile>
        </>
        );  
    }
    return (
        <Box>
            <BoxDesktop>
                {rating !== 0 && <Rate rating={rating} />}
                {rating === 0 && <RatingNotfind  />}
            </BoxDesktop>
        </Box>
    );
};

export default index;