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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import _ from 'lodash';
import { ReactSVG } from 'react-svg';

interface IDataList { title: string, subtitle: string, icon: any}
    
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    accordionSummary: {
        '&.MuiAccordionSummary-root':{
            backgroundColor: '#F3F2FA',
            height: '48px',
            minHeight: '48px',
            '&.Mui-expanded': {
                backgroundColor: '#F3F2FA',
                height: '48px',
                minHeight: '48px',
            },
        },
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
    },
    heading: {
        '& .MuiTypography-body1':{
            color: ColorManager.default.fourthColor,
            fontFamily: FontManager.default.secondaryFont,
            fontSize: FontManager.default.TEXT_20,
            lineHeight: FontManager.default.TEXT_TINY_EXTRA_17,
            width: '100%',
            textAlign: 'center',
        }
    },
    list: {
        width: '100%',
    },
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
        '&.MuiListItem-secondaryAction': {
            paddingRight: '16px',
        },
    },
    listText: {
        '&.MuiListItemText-root': {
            marginTop: 0,
            marginBottom: 0,
            paddingRight: '60px',
        },
        '&.MuiTypography-body1':{
            fontSize: FontManager.default.TEXT_20,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
        '& .MuiTypography-body1':{
            fontSize: FontManager.default.TEXT_20,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
    },
    listItemIconHeaderContainer: {
        '& .MuiSvgIcon-root': {
            color: ColorManager.default.fifthColor,
        },
    },
    listItemIconContainer: {
        '&.MuiListItemIcon-root': {
            minWidth: '24px',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
            color: ColorManager.default.greenColor,
        },
    },
    gridContainer: {
        '&.MuiGrid-item.MuiGrid-item':{
            paddingTop: '2px',
            paddingBottom: '2px',
        },
    },
    listContainer: {
        '&.MuiListItem-root': {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    accordionDetailContainer: {
        '&.MuiAccordionDetails-root': {
            padding: '1rem 0.5rem',
        },
    },
    chipText: {
        '&.MuiChip-root': {
            backgroundColor: '#F3F2FA',
            borderRadius: '3px',            
            marginLeft: '140px',
            position: 'absolute',
        },
        '& .MuiChip-label': {
            fontSize: FontManager.default.TEXT_20,
            color: ColorManager.default.fifthColor,
        },
    },
    hotelAllFacilityHeadingIcon: {
        color: ColorManager.default.fifthColor,
    },
    imageIcon: {
        height: '23px',
        width: '23px',
        margin: 'auto',
        '& svg': {
            height: '23px',
            width: '23px',
        },
    },
  }),
);

export default function index(props: any) {
    const { data, expanded, onChange, isMobile, inx } = props;
    
    const classes = useStyles();

    const listComponent = (dataLists: IDataList[]) => {
        let listsRes:any[] = [];
        // console.log("hotelFacilityComponent -> hotelInfo?.facility", hotelInfo?.facility[0].hotel_facility)
        _.forEach(dataLists, function(listItem, index) {
            if(data.listType == 'listtime'){
                listsRes.push(
                    <Grid item xs={12} key={index} className={classes.gridContainer}>
                        <ListItem className={classes.listContainer}>
                            { (listItem.icon) ? <ListItemIcon className={classes.listItemIconContainer}>{listItem.icon}</ListItemIcon> : null }
                            <ListItemText primary={listItem.title} className={classes.listText}></ListItemText> 
                            <Chip label={listItem.subtitle} className={classes.chipText}/>
                        </ListItem>
                    </Grid>
                    )
            }else if(data.listType == 'listicon'){
                listsRes.push(
                    <Grid item xs={12} key={index} className={classes.gridContainer}>
                        <ListItem className={classes.listContainer}>
                            { (listItem.icon) ? <ListItemIcon className={classes.listItemIconContainer}>{listItem.icon}</ListItemIcon> : null }
                            <ListItemText primary={listItem.title} className={classes.listText} />
                            <ListItemSecondaryAction>
                                <Typography className={classes.listText}>{listItem.subtitle}</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Grid>
                    )
            }else {
                listsRes.push(
                <Grid item xs={6} key={index} className={classes.gridContainer}>
                    <ListItem className={classes.listContainer}>
                        { (listItem.icon) ? <ListItemIcon className={classes.listItemIconContainer}>{listItem.icon}</ListItemIcon> : null }
                        <ListItemText primary={listItem.title} className={classes.listText} />
                    </ListItem>
                </Grid>
                )
            }
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
                <ListItem>
                    { (data.iconType == 'icon') ? data.icon : 
                        // <Icon classes={{root: classes.iconRoot}}>
                        //     <img className={classes.imageIcon} src={data.icon}/>
                        // </Icon>
                        <ReactSVG className={classes.imageIcon} src={data.icon}/>
                    }
                    <ListItemText primary={data.heading} className={classes.heading} />        
                </ListItem>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetailContainer}>
                <Grid container spacing={3}>
                    {listComponent(data.lists)}
                </Grid>
            </AccordionDetails>
        </Accordion>
      </>
    );
}