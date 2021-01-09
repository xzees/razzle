import React from 'react';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import styled from "styled-components";
import _ from 'lodash';
import { ReactSVG } from 'react-svg';

interface IDataList { title: string, subtitle: string, icon: any} 
    
const styles = {
    ListContainer: styled<any>(ListItem)`
        &.MuiListItem-root{
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 32px;
        },
    `,

    ListItemIconContainer: styled(ListItemIcon)`
        &.MuiListItemIcon-root {
            min-width: 24px;
            & .MuiSvgIcon-root: {
                font-size: 1rem;
                color: ${ColorManager.default.greenColor};
            },
        },
    `,
    SubtitleText: styled(ListItemText)`
        margin-top: 0;
        margin-bottom: 0;
        & .MuiTypography-body1 {
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.black};
        },
    `,
    ListText: styled(ListItemText)`
        &.MuiListItemText-root{
            margin-top: 0;
            margin-bottom: 0;
            & .MuiTypography-body1 {
                font-size: ${FontManager.default.TEXT_20};
                line-height: ${FontManager.default.TEXT_20};
                color: ${ColorManager.default.black};
            },
        },
    `,
    hotelAllFacilityLeftContainer: styled(Grid)`
        text-align: center;
        .MuiSvgIcon-root {
            font-size: ${FontManager.default.LARGE_MEDIUM_32};
            color: ${ColorManager.default.fifthColor};
        }
    `,
    HotelAllFacilityGroupContainer: styled(Grid)`
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
    HotelAllFacilityHeadingText: styled(Typography)`
        &.MuiTypography-body1 {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.black};
        },
    `,
    HotelFacilityListContainer: styled(Grid)`
        border-left: 1px solid  ${ColorManager.default.greyColor};
        color: ${ColorManager.default.black};
    `,
    GridContainer: styled(Grid)` 
        &.MuiGrid-item {
            paddin-top: 2px;
            padding-bottom: 2px;
        },
    `,
    ChipText: styled(Chip)`
        &.MuiChip-roo {
            background-color: ${ColorManager.default.greyColor};
            border-radius: 3px;     
            margin-left: 140px;
            position: absolute;
            & .MuiChip-label {
                font-size: ${FontManager.default.TEXT_20};
                color: ${ColorManager.default.thirdColor};
            },
        },
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

    const listComponent = (listType: string, dataLists: IDataList[]) => {
        let listsRes:any[] = [];
        _.forEach(dataLists, function(listItem, index) {
            if(listType == 'listtime'){
                listsRes.push(
                    <styles.GridContainer item xs={12} key={index}>
                        <styles.ListContainer>
                            { (listItem.icon) ? <styles.ListItemIconContainer>{listItem.icon}</styles.ListItemIconContainer> : null }
                            <styles.ListText primary={listItem.title}></styles.ListText> 
                            <styles.ChipText label={listItem.subtitle}/>
                        </styles.ListContainer>
                    </styles.GridContainer>
                    )
            }else{
                listsRes.push(
                    <styles.GridContainer item xs={12} key={index}>
                        <styles.ListContainer>
                            { (listItem.icon) ? <styles.ListItemIconContainer>{listItem.icon}</styles.ListItemIconContainer> : null }
                            <styles.ListText primary={listItem.title}></styles.ListText> 
                            <ListItemSecondaryAction>
                                <styles.SubtitleText>{listItem.subtitle}</styles.SubtitleText>
                            </ListItemSecondaryAction>
                        </styles.ListContainer>
                    </styles.GridContainer>
                    )
            }
        });
        return listsRes;
    }

    const hotelPolicyComponent = (data:any) => {
        let facilityRes:any[] = [];
        _.forEach(data, function(item: any, index: number) {
            facilityRes.push(
                <styles.HotelAllFacilityGroupContainer container key={index}>
                    <styles.hotelAllFacilityLeftContainer item xs={2}>
                        { (item.iconType == 'icon') ? item.icon : 
                        // <Icon classes={{root: classes.iconRoot}}>
                        //     <img className={classes.imageIcon} src={item.icon}/>
                        // </Icon>
                        <styles.MyReactSVG src={item.icon}/>
                         }
                        <styles.HotelAllFacilityHeadingText>
                            {item.heading}
                        </styles.HotelAllFacilityHeadingText>
                    </styles.hotelAllFacilityLeftContainer>
                    <styles.HotelFacilityListContainer item xs={10}>
                        <Grid container spacing={3}>
                            { listComponent(item.listType, item.lists) }
                        </Grid>
                    </styles.HotelFacilityListContainer>
                </styles.HotelAllFacilityGroupContainer>
            )
          });
        return facilityRes;
    }

    return (
        <>
            {hotelPolicyComponent(data)}
        </>
    );
}