import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import WifiIcon from '@material-ui/icons/Wifi';
import Pagination from '@material-ui/lab/Pagination';
import {
    SectionDesktop,
    Containers
} from 'modules/hotel/component/Banner/List/Style'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


export { default as Box } from '@material-ui/core/Box';
export { default as Grid } from '@material-ui/core/Grid';
export { default as Button } from '@material-ui/core/Button';
export { default as FontManager } from 'modules/hotel/Manager/FontManager';
export { default as ColorManager } from 'common/Manager/ColorManager';
export {
    SectionDesktop as SectionDesktop,
    Containers as Containers
} from 'modules/hotel/component/Banner/List/Style'

export const styles = {
    HotelDetailVerticalDivider: styled<any>(Divider)`
        &.MuiDivider-vertical {
            color: ${ColorManager.default.fourthColor};
            margin: 0 8px;
        }
    `,
    TopFacilityPaper: styled<any>(Paper)`
        &.MuiPaper-outlined{
            text-align: center;
            border-color: ${ColorManager.default.fourthColor};
            padding: 1rem .6rem;
            box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.5);
            overflow: hidden;
            white-space: nowrap;
        }
    `,
    HotelFacilityText: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_TINY_18};
            text-overflow: ellipsis;
            overflow: hidden;
        }
    `,
    TextRemark: styled<any>(Typography)`
        &.MuiTypography-root {
            color: ${ColorManager.default.fourthColor};
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_TINY_18};
            margin: 10px 0px;
        }
    `,
    HotelTitle: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.LARGE_EXTRA_40};
            color: ${ColorManager.default.thirdColor};
        }
    `,
    HotelClass: styled<any>(StarIcon)`
        color: ${ColorManager.default.yellowColor};
        font-size: ${FontManager.default.text};
    `,
    HotelAddress: styled<any>(Typography)`
        &.MuiTypography-body1 {
            color: ${ColorManager.default.fourthColor};
            font-size: ${FontManager.default.LARGE_28};
            line-height: 30px;
        }
    `,
    AccordionHeading: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.LARGE_28};
        }
    `,
    HotelDetail: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-size: ${FontManager.default.SMALL_MEDIUM_14};
            font-family: ${FontManager.default.thirdFont};
        }
    `,
    HotelFacilityIcon: styled<any>(WifiIcon)`
        color: ${ColorManager.default.fourthColor};
    `,
    HotelDetailDivider: styled<any>(Divider)`
       color: ${ColorManager.default.fourthColor};
    `,
    HotelFacilityGridContainer: styled<any>(Grid)`
        &.MuiGrid-root{
            padding: 1rem 2rem;
            display: block;
        }
    `,
    MyPagination : styled<any>(Pagination)`
        .MuiPaginationItem-root {
            min-width: 40px;
            height: 40px;
            color: ${ColorManager.default.fifthColor};
            background-color: ${ColorManager.default.white};
            font-size: ${FontManager.default.TEXT_EXTRA_24};
            border-color: ${ColorManager.default.greyColor};
            border-radius: 4px;
            margin: 1px;
        }
        .MuiPagination-ul {
            justify-content: flex-end;
        }
        .MuiPagination-ul li {
            display:none;
        }
        .MuiPagination-ul li:first-child, .MuiPagination-ul li:last-child {
            display:block;
        }
        .MuiPaginationItem-page.Mui-selected,.MuiPaginationItem-page.Mui-selected:hover, .MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
            color: ${ColorManager.default.fifthColor};
            background-color: ${ColorManager.default.white};
        }
    `,
    MyJumpNavigationContainer: styled<any>(SectionDesktop)`
        background-color: ${ColorManager.default.white};
        position: sticky;
        top: 140px;
        z-index: 9998;
        padding: 0;
        visibility: hidden;
        opacity: 0;
        height: 0;
        box-shadow: 0 3px 5px -6px black;
    `,
    MyBreadcrumbs: styled<any>(Breadcrumbs)`
        .MuiBreadcrumbs-ol{
            justify-content: center;
            font-size: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.black};
        }
        .MuiBreadcrumbs-li{
            cursor: pointer;
        }
        .MuiBreadcrumbs-li .active, .MuiBreadcrumbs-li a:hover{
            text-decoration: underline;
        }
    `,
}

export const backgroungWhiteStyle: React.CSSProperties = { backgroundColor: ColorManager.default.white, padding: '1.5rem'};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hotelAllFacilityHeadingIcon: {
        color: ColorManager.default.fifthColor,
    },
    imageIcon: {
        height: '27.5px',
        width: 'auto',
        '& svg':{
            height: '27.5px',
            width: 'auto',
        },
        '& path':{
            fill: ColorManager.default.fourthColor,
        }
    },
    iconRoot: {
        textAlign: 'center'
    },
  })
);