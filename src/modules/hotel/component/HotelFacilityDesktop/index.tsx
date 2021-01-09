import React from 'react';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import styled from "styled-components";
import _ from 'lodash';
import FacilitiesInterface from 'modules/hotel/models/Facilities/FacilitiesInterface';
import { ReactSVG } from 'react-svg';

const styles = {
    ListContainer: styled<any>(ListItem)`
        .MuiListItem-root {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 32px;
        }
    `,
    ListItemIconContainer: styled(ListItemIcon)`
        &.MuiListItemIcon-root {
            min-width: 24px;
            & .MuiSvgIcon-root {
                font-size: 1rem;
                color: ${ColorManager.default.greenColor};
            },
        },
    `,
    ListText: styled(ListItemText)`
        margin-top: 0;
        margin-bottom: 0;
        & .MuiTypography-body1 {
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_20};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: ${ColorManager.default.black};
        },
    `,
    HotelAllFacilityLeftContainer: styled<any>(Grid)`
        text-align: center;
    `,
    HotelAllFacilityGroupContainer: styled<any>(Grid)`    
        &.MuiGrid-container {
            border: 1px solid ${ColorManager.default.greyColor};
            border-bottom: 0;
            padding: 1.5rem 0.5rem;
        },
        &:first-child {
            border-radius: 3px 3px 0 0;
        },
        &:last-child {
            border-bottom: 1px solid ${ColorManager.default.greyColor};
            border-radius: 0 0 3px 3px;
        },
    `,
    HotelAllFacilityHeadingIcon: styled<any>(HotelOutlinedIcon)`
        color: ${ColorManager.default.fifthColor};
    `,
    HotelAllFacilityHeadingText: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.black};
        },
    `,
    ListItemFacilityContainer: styled<any>(Grid)`
        &.MuiGrid-item.MuiGrid-item {
            padding-top: 0;
            padding-bottom: 0;
            height: 32px;
        },
    `,
    HotelFacilityListContainer: styled<any>(Grid)`
        border-left: 1px solid ${ColorManager.default.greyColor};
    `,
    MyReactSVG: styled<any>(ReactSVG)`
        height: 27.5px;
        width: 27.5px;
        margin: auto;
        svg {
            height: 27.5px;
            width: 27.5px; 
        }
        path {
            fill: ${ColorManager.default.fourthColor};
        }
    `,
}

export default function index(props: any) {
    const { data } = props;

    const listComponent = (dataLists: FacilitiesInterface[]) => {
        let listsRes:any[] = [];
        _.forEach(dataLists, function(listItem, index) {
            listsRes.push(
                <styles.ListItemFacilityContainer item xs={4} key={index}>
                    <styles.ListContainer>
                        <styles.ListItemIconContainer>
                            <CheckCircleOutlineIcon />
                        </styles.ListItemIconContainer>
                        <styles.ListText primary={listItem.translationNameTh} />
                    </styles.ListContainer>
                </styles.ListItemFacilityContainer>
            )
        });
        return listsRes;
    }

    const hotelFacilityComponent = (data:any) => {
        let facilityRes:any[] = [];
        _.forEach(data, function(item, index) {
            const label = item.facilitiesGroup.translationNameTh;
            const facilityItems = item.facilitiesGroup.facilities;
            const iconUrl = item.facilitiesGroup.icon;
            facilityRes.push(
                <styles.HotelAllFacilityGroupContainer container key={index}>
                    <styles.HotelAllFacilityLeftContainer item xs={3}>
                        {/* <Icon classes={{root: classes.iconRoot}}>
                            <img className={classes.imageIcon} src={iconUrl}/>
                        </Icon>  */}
                        <styles.MyReactSVG src={iconUrl}/>                    
                        <styles.HotelAllFacilityHeadingText component="p">
                            {label}
                        </styles.HotelAllFacilityHeadingText>
                    </styles.HotelAllFacilityLeftContainer>
                    <styles.HotelFacilityListContainer item xs={9}>
                        <Grid container>
                            { listComponent(facilityItems) }
                        </Grid>
                    </styles.HotelFacilityListContainer>
                </styles.HotelAllFacilityGroupContainer>
            )
          });
        return facilityRes;
    }

    return (
        <>
            {hotelFacilityComponent(data)}
        </>
    );
}