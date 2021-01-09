import React, { useRef, useLayoutEffect, useState } from 'react';
import styled from "styled-components";
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListItemText from '@material-ui/core/ListItemText';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import _ from 'lodash';
import i18n from 'utilities/I18n';

type Props = {
    isMobile?: boolean,
    width?: number,
}

const styles = {
    MyToggleButton : styled<any>(ToggleButton)`
        width: 100%;
        border: 1px solid ${ColorManager.default.greyColor};
    `,
    MyListItemText: styled<any>(ListItemText)`
        &.MuiListItemText-multiline {
            margin: 0 6px 0 12px;
            text-align: left;
        }
        .MuiTypography-body1 {
            color: ${ColorManager.default.fourthColor};
            font-size: ${(props: Props) => props.isMobile ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18};
            line-height: ${FontManager.default.SMALL_MEDIUM_14};
        }
        .MuiTypography-body2 {
            color: ${ColorManager.default.fifthColor};
            font-size: ${(props: Props) => props.isMobile ? FontManager.default.TEXT_TINY_18 : FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_TINY_18};
            font-family: ${FontManager.default.secondaryFont};
        }
    `,
    MyPopupMenuStyle: styled<any>(Menu)`
        .MuiPopover-paper {
            width: ${(props: Props) => props.width}px;
            min-width: 155px;
            margin-top: 51px;
        }
        .MuiListItem-root {
            font-size: ${FontManager.default.text};
            color: ${ColorManager.default.fourthColor};
            .MuiListItem-button:hover{
                color: ${ColorManager.default.primaryColor};
            }
        }
    `,
    MyPopupMenuMobileStyle: styled<any>(Menu)`
        .MuiPopover-paper {
            min-width: 155px;
            margin-top: 51px;
        }
        .MuiListItem-root {
            font-size: ${FontManager.default.text};
            color: ${ColorManager.default.fourthColor};
            .MuiListItem-button:hover{
                color: ${ColorManager.default.primaryColor};
            }
        }
    `,
}
interface IOption {
    title: string,
    val: string
}

export default function filterbutton(props: any) {
    const { isMobile } = props;
    const targetRef = React.createRef<HTMLDivElement>();
    const [buttonGroupWidth, setButtonGroupWidth] = useState(145);
    const [anchorE, setAnchorE] = React.useState<null | HTMLElement>(null);
    const [options, setOptions] = React.useState<IOption[]>([{title: i18n.t('hotel.components.filterbar.price.lblchoose'), val: ''},
    {title: i18n.t('hotel.components.hotelreview.message.filterbutton.lblreview'), val: ''},
    {title: i18n.t('hotel.components.hotelreview.message.filterbutton.lblmax'), val: ''},
    {title: i18n.t('hotel.components.hotelreview.message.filterbutton.lblmin'), val: ''}]);
    const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0);
    const handleClickE = (event: React.MouseEvent<HTMLButtonElement>) => {
        setButtonGroupWidth(Number(targetRef.current?.offsetWidth));
        // console.log("handleClickE -> currentTarget", targetRef.current?.offsetWidth);
        setAnchorE(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE(null);
    };
    const handleOptionClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedOptionIndex(index);
        setAnchorE(null);
    };
  
    return (
        <>
            <ToggleButtonGroup style={{width: '100%'}} ref={targetRef} >
                <styles.MyToggleButton aria-controls="menu-review-sorting" aria-haspopup="true" onClick={handleClickE} ref={targetRef}>
                    <KingBedOutlinedIcon style={{color: ColorManager.default.fourthColor}} />
                    <styles.MyListItemText primary={i18n.t('hotel.components.hotelreview.message.filterbutton.roomtype')} 
                    secondary={i18n.t('hotel.components.hotelreview.message.filterbutton.allroom')}
                    isMobile={isMobile} />
                    <KeyboardArrowDownOutlinedIcon style={{color: ColorManager.default.fifthColor}} />
                </styles.MyToggleButton>
            </ToggleButtonGroup>
            <styles.MyPopupMenuStyle
                id="menu-review-sorting"
                anchorEl={anchorE}
                keepMounted
                open={Boolean(anchorE)}
                onClose={handleClose}
                width={buttonGroupWidth}
                >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        disabled={index === 0}
                        selected={index === selectedOptionIndex}
                        onClick={(event) => {handleOptionClick(event, index)}}
                    >
                        {option.title}
                    </MenuItem>
                    ))}
            </styles.MyPopupMenuStyle>
            </>
    );
}