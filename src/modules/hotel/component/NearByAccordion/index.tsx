import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import _ from 'lodash';
import i18n from 'utilities/I18n';

interface IDataList { title: string, distance: number }
    
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    accordionSummary: {
        backgroundColor: '#F3F2FA',
        height: '48px',
        minHeight: '48px',
        '& .MuiAccordionSummary-content': {
            margin: 0,
            minHeight: '48px',
        },
        '& .MuiIconButton-root': {
            color: ColorManager.default.fourthColor,
            padding: '6px',
        },
        '& .MuiIconButton-edgeEnd': {
            marginRight: '-6px',
        },
        '&.Mui-expanded': {
            minHeight: '48px',
        }
    },
    heading: {
      fontSize: FontManager.default.text,
      color: ColorManager.default.fourthColor,
      width: '100%',
      textAlign: 'center',
      lineHeight: '48px',
    },
    list: {
        width: '100%',
    },
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    listText: {
        marginTop: 0,
        marginBottom: 0,
        fontSize: FontManager.default.small,
        '& .MuiTypography-body1':{
            fontSize: FontManager.default.small,
        },
        '& .MuiTypography-body2':{
            fontSize: FontManager.default.small,
        },
    },
  }),
);

export default function index(props: any) {
    const { data, expanded, onChange, isMobile } = props;
    // console.log("index -> isMobile", isMobile)
    // console.log("index -> expanded", expanded)
    
    const classes = useStyles();

    const listComponent = (dataLists: IDataList[]) => {
        let listsRes:any[] = [];
        // console.log("hotelFacilityComponent -> hotelInfo?.facility", hotelInfo?.facility[0].hotel_facility)
        _.forEach(dataLists, function(listItem, index) {
            listsRes.push(
                <ListItem key={index} className={classes.listItem}>
                    <ListItemText primary={listItem.title} className={classes.listText} />
                    <ListItemSecondaryAction>
                        <Typography className={classes.listText}>{listItem.distance} {i18n.t('hotel.components.nearbyacc.km')}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            )
          });
        return listsRes;
    }

    return (
        <>
        <Accordion square expanded={expanded} onChange={onChange(data.id)}>
            <AccordionSummary
            expandIcon={ isMobile ? <ExpandMoreIcon /> : null }
            aria-controls={data.id+'-content'}
            id={data.id+'-header'}
            className={classes.accordionSummary}
            >
                <Typography className={classes.heading}>{data.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List className={classes.list}>
                    {listComponent(data.lists)}
                </List>
            </AccordionDetails>
        </Accordion>
      </>
    );
}