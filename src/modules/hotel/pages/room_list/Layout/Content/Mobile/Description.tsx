import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager, Accordion, AccordionSummary, AccordionDetails, Typography} from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import i18n from 'utilities/I18n';

const Description = inject('stores')(
    observer((props: RoomListInterface) => {
    const myclasses = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
            <styles.MBox component="div" m={6}>
                <Accordion square className={myclasses.accordionContainer}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={myclasses.accordionMoreIcon}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <styles.AccordionHeading>
                        {i18n.t('hotel.pages.roomlist.desktop.hoteldesc')}
                    </styles.AccordionHeading>
                    <Typography className={myclasses.accordionSecondaryHeading}>
                        {i18n.t('hotel.pages.roomlist.mobile.seeinfo')}
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <styles.HotelDetail variant="body1" component="p">
                                {hotelInfo?.hotelDescription}
                            </styles.HotelDetail>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </styles.MBox>
    );
}));

export default Description;
