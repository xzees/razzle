import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FacilitiesGroup from 'modules/hotel/models/FacilitiesGroup';
import Facilities from 'modules/hotel/models/Facilities';
import styled from "styled-components";
import _ from 'lodash';
import { ReactSVG } from 'react-svg';

const styles = {
    HotelAccordionSummary: styled<any>(AccordionSummary)`
        &.MuiAccordionSummary-root {
            background-color: ${ColorManager.default.greyColor};
            height: 48px;
            min-height: 48px;
            &.Mui-expanded {
                min-height: 48px;
            },
        },
        & .MuiAccordionSummary-content {
            margin: 0;
            min-height: 48px;
        },
        & .MuiIconButton-root {
            color: ${ColorManager.default.fourthColor};
            padding: 6px;
        },
        & .MuiIconButton-edgeEnd {
            margin-right: -6px;
        },
    `,
    HeadingText: styled<any>(ListItemText)`
        & .MuiTypography-body1 {
            font-size: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.fourthColor};
            width: 100%;
            text-align: center;
            line-height: ${FontManager.default.TEXT_TINY_18};
        }
    `,
    ListText: styled<any>(ListItemText)`
        &.MuiListItemText-root{
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
            & .MuiTypography-body1 {
                font-size: ${FontManager.default.TEXT_20};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            },
        },
    `,
    ListItemIconHeaderContainer: styled<any>(ListItemIcon)`
        & .MuiSvgIcon-root {
            color: ${ColorManager.default.fifthColor};
        },
    `,
    ListItemIconContainer: styled<any>(ListItemIcon)`
        &.MuiListItemIcon-root{
            min-width: 24px;
            padding: 0;
            & .MuiSvgIcon-root {
                font-size: 1rem;
                color: ${ColorManager.default.greenColor};
            },
        },
    `,
    GridContainer: styled<any>(Grid)`
        &.MuiGrid-root.MuiGrid-item {
            padding-top: 0;
            padding-bottom: 0;
        },
    `,
    ListContainer: styled<any>(ListItem)`
        &.MuiListItem-root{
            padding-top: 0;
            padding-bottom: 0;
            padding-right: 0;
        },
    `,
    AccordionDetailContainer: styled<any>(AccordionDetails)`
        &.MuiAccordionDetails-root{
            padding: 1rem 0.5rem;
        },
    `,
    MyReactSVG: styled<any>(ReactSVG)`
        height: 24px;
        width: 24px;
        margin-right: 5px;
        svg {
            height: 24px;
            width: 24px; 
        }
        path {
            fill: ${ColorManager.default.fourthColor};
        }
    `,
}


export default function index(props: any) {
    const { data, expanded, onChange, isMobile } = props;
    const facilityGroup:FacilitiesGroup = data.facilitiesGroup;
    const label =  facilityGroup.translationNameTh;
    const iconUrl =  facilityGroup.icon;

    const listComponent = (dataLists: Facilities[]) => {
        let listsRes:any[] = [];
        _.forEach(dataLists, function(listItem, index) {
            const label = listItem.translationNameTh;
            listsRes.push(
            <styles.GridContainer item xs={(dataLists.length == 1) ? 12 : 6} key={listItem.id}>
                <styles.ListContainer>
                    <styles.ListItemIconContainer>
                        <CheckCircleOutlineIcon />
                    </styles.ListItemIconContainer>
                    <styles.ListText primary={label}/>
                </styles.ListContainer>
            </styles.GridContainer>
            )
        });
        return listsRes;
    }

    return (
        <>
        <Accordion square expanded={expanded} onChange={onChange(data.facilitiesGroup.id)}>
            <styles.HotelAccordionSummary
            expandIcon={ isMobile ? <ExpandMoreIcon /> : null }
            aria-controls={data.facilitiesGroup.id+'-content'}
            id={data.facilitiesGroup.id+'-header'}
            >
                <ListItem>
                    <styles.ListItemIconHeaderContainer>
                        {/* <Icon classes={{root: classes.iconRoot}}>
                            <img className={classes.imageIcon} src={iconUrl}/>
                        </Icon> */}
                        <styles.MyReactSVG src={iconUrl}/>
                    </styles.ListItemIconHeaderContainer>                   
                    <styles.HeadingText primary={label}/>        
                </ListItem>
            </styles.HotelAccordionSummary>
            <styles.AccordionDetailContainer>
                <Grid container spacing={2}>
                    {listComponent(facilityGroup.facilities)}
                </Grid>
            </styles.AccordionDetailContainer>
        </Accordion>
      </>
    );
}