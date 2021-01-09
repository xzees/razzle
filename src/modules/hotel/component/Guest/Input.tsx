import React from 'react';
import { 
    Input__Box, 
    Input__Box__Labels,
    Input__Box__Label__Bottom
} from './Style';
import Iprops from './interface';
import i18n from 'utilities/I18n';
import { Box } from '@material-ui/core';

const Input = ({
        handleClick,
        room,
        adult,
        child,
        Theme,
        open
    }: Iprops) => {
    const Themes = {...Theme}
    const backgroundColor = open ? undefined : Themes.backgroundColor
    const labelColor = open ? undefined : Themes.labelColor
    const textColor = open ? undefined : Themes.textColor


    return (
        <Input__Box
            backgroundcolor={backgroundColor}
        >
            <Box 
                onClick={handleClick}
                flex={'auto'}
            >
                <Input__Box__Labels
                    labelcolor={labelColor}
                >{i18n.t('hotel.mobile.guest.title')}</Input__Box__Labels>
                <Input__Box__Label__Bottom
                    textcolor={textColor}
                >
                    {i18n.t('hotel.search.adult')} {adult} {i18n.t('hotel.search.adult.type')} {', '}
                    {child > 0 ? `${i18n.t('hotel.search.child')} ` + child + ` ${i18n.t('hotel.search.adult.type')}, ` : ' '} 
                    {room} {i18n.t('hotel.search.room')}
                </Input__Box__Label__Bottom>
            </Box>  
        </Input__Box>
    )
}

export default Input