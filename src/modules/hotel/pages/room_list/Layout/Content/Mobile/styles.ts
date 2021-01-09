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
import Button from '@material-ui/core/Button';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export { default as Box } from '@material-ui/core/Box';
export { default as Grid } from '@material-ui/core/Grid';
export { default as Typography } from '@material-ui/core/Typography';
export { default as FontManager } from 'modules/hotel/Manager/FontManager';
export { default as ColorManager } from 'common/Manager/ColorManager';
export {
    SectionDesktop as SectionDesktop,
    Containers as Containers
} from 'modules/hotel/component/Banner/List/Style'

export const styles = {
    MBox: styled<any>(Box)``,

    TopContainer: styled<any>(Box)`
        &.MuiBox-root{
            background-color: ${ColorManager.default.fifthColor};
            padding: 0.8rem 1.5rem;
            margin: 0;
        }
    `,
    EditSearchButton: styled<any>(Button)`
        &.MuiButton-root{
            color: ${ColorManager.default.white};
            font-size: ${FontManager.default.text};
            line-height: 25px;
            border-color: ${ColorManager.default.white};
        }
    `,
    HotelTitle: styled<any>(Typography)`
        &.MuiTypography-root {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.LARGE_MEDIUM_30};
            color: ${ColorManager.default.thirdColor};
        }
    `,
    HotelClass: styled<any>(StarIcon)`
        &.MuiSvgIcon-root {
            color: ${ColorManager.default.yellowColor};
            font-size: ${FontManager.default.TEXT_20};
        }
    `,
    TopFacilityPaper: styled<any>(Paper)`
        &.MuiPaper-outlined{
            text-align: center;
            border-color: ${ColorManager.default.fourthColor};
            padding: .6rem;
            box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.5);
            overflow: hidden;
            white-space: nowrap;
        }
    `,
    HotelFacilityText: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${FontManager.default.meduimSmall};
            line-height: 17px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
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
    AccordionHeading: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-family: ${FontManager.default.secondaryFont};
            font-size: ${FontManager.default.LARGE_MEDIUM_30};
        }
    `,
    HotelAddress: styled<any>(Typography)`
        &.MuiTypography-body1 {
            color: ${ColorManager.default.fourthColor};
            font-size: ${FontManager.default.TEXT_20};
            line-height: 30px;
        }
    `,
    HotelDetail: styled<any>(Typography)`
        &.MuiTypography-body1 {
            font-size: ${FontManager.default.SMALL_MEDIUM_14};
            font-family: ${FontManager.default.thirdFont};
        }
    `,
    HotelFacilityIcon: styled<any>(WifiIcon)`
        &.MuiSvgIcon-root {
            color: ${ColorManager.default.fourthColor};
        }
    `,
    HotelDetailDivider: styled<any>(Divider)`
        &.MuiDivider-root{
            color: ${ColorManager.default.fourthColor};
        }
    `,
    HotelFacilityGridContainer: styled<any>(Grid)`
        &.MuiGrid-root{
            padding-left: 1rem;
            padding-right: 1rem;
            margin: 5px -0.375rem;
            display: block;
        }
    `,
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionContainer: {
        margin: 0,
    },
    accordionSecondaryHeading: {
        color: ColorManager.default.fourthColor,
        fontSize: FontManager.default.text,
        lineHeight: '45px',
    },
    accordionMoreIcon: {
        padding: 0,
    },
    prominentPoint: {
        width: '100%',
        fontSize: FontManager.default.text,
        color: ColorManager.default.greenColor,
        borderColor: ColorManager.default.greenColor,
        backgroundColor: '#F2FEF2',
        marginTop: '5px',
        marginBottom: '5px',
        '& .MuiButton-label': {
            justifyContent: 'flex-start'
        },
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
  }),
);

export const Accordion = withStyles({
    root: {
        border: 0,
        borderTop: '1px solid' + ColorManager.default.greyColor,
        borderBottom: '1px solid' + ColorManager.default.greyColor,
        boxShadow: 'none',
        margin: 0 ,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
    root: {
        minHeight: 24,
        padding: 0,
        '&$expanded': {
            minHeight: 24,
        },
    },
    content: {
        justifyContent: 'space-between',
        margin: 0,
        '&$expanded': {
            margin: '12px 0',
        },
    },
expanded: {},
    })(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: 0,
    },
}))(MuiAccordionDetails);