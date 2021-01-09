import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListItemText from '@material-ui/core/ListItemText';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlockModel from 'modules/hotel/models/BlockModel';
import _ from 'lodash';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import HotelRoomListInterface from 'modules/hotel/component/HotelRoomList/HotelRoomListInterface';
import RoomSelectedModel from 'modules/hotel/models/RoomSelectedModel';
import { inject, observer } from 'mobx-react';
interface TProps {
    isMobile?: boolean | undefined;
    width?: number | undefined;
}

const styles = {
    MyToggleButton: styled<any>(ToggleButton)`
        &.MuiToggleButton-root { 
            padding: 7px 5px 7px 20px !important;
            border: 1px solid rgb(0 0 0);
        }
        width: 65px;
        padding-left: 12px;
        border: 1px solid ${(props: any) => props.color ? props.color : ColorManager.default.black};
    `,
    MyListItemText: styled<any>(ListItemText)`
        &.MuiListItemText-multiline {
            margin: 0 12px 0 12px;
            text-align: left;
        }
        .MuiTypography-body1 {
            color: ${ColorManager.default.black};
            font-size: ${(props: TProps) => props.isMobile ? FontManager.default.LARGE_28 : FontManager.default.LARGE_28};
            line-height: ${FontManager.default.LARGE_28};
        }
        .MuiTypography-body2 {
            color: ${ColorManager.default.black};
            font-size: ${(props: TProps) => props.isMobile ? FontManager.default.TEXT_TINY_18 : FontManager.default.LARGE_28};
            line-height: ${FontManager.default.TEXT_TINY_18};
            font-family: ${FontManager.default.secondaryFont};
        }
    `,
    MyPopupMenuStyle: styled<any>(Menu)`
        .MuiPopover-paper {
            width: ${(props: TProps) => props.width}px;
            min-width: 145px;
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
};
interface OptionInterface {
    label: string;
    value: number;
}

interface SelectInterface extends Omit<HotelRoomListInterface, "block"> {
    isMobile: boolean;
    color: any | null;
    parent_props: BlockModel;
}
// type SelectInterface = Omit<HotelRoomListInterface, "block">

const RenderMenuItem = (props: any) => {

    const onclick = (event: any) => {
        props.handleOptionClick(event, props.index);
    };

    return (
        <MenuItem
            key={props.index}
            selected={props.index === props.selectedOptionIndex}
            onClick={onclick}
        >
            {props.option.label}
        </MenuItem>
    );
};

const index = inject('stores')(
    observer((props: SelectInterface) => {
        const uiStore = props.stores!.HotelRootStore;
        const roomlistStore = uiStore.RoomlistStore;
        const reservationStore = uiStore.ReservationStore;

        //console.log("🚀 ~ file: index.tsx ~ line 109 ~ observer ~ roomlistStore", roomlistStore.roomSelected);
        // console.log("🚀 ~ file: index.tsx ~ line 96 ~ sortingbutton ~ props", props)
        const { isMobile, color, parent_props } = props;

        // const parent_props:BlockModel = props.parent_props;
        const targetRef = React.createRef<HTMLDivElement>();
        const [buttonGroupWidth, setButtonGroupWidth] = useState(parent_props.selectedAmount);
        const [anchorE, setAnchorE] = React.useState<null | HTMLElement>(null);
        const roomLeft: number = (parent_props?.numberOfRoomsLeft < 10) ? parent_props?.numberOfRoomsLeft + 1 : 10;
        const [options, setOptions] = React.useState<OptionInterface[]>(_.range(roomLeft).map((v) => { return { label: v.toString(), value: v } }));
        // const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(roomlistStore.roomSelected.find((v) => { return (v.blockId == parent_props.blockId)})?.amount || 0);
        const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0);
        //console.log("🚀 ~ file: index.tsx ~ line 119 ~ observer ~ selectedOptionIndex", parent_props.blockId, selectedOptionIndex)

        // useEffect(() => {
        //     // const selectAmount = roomlistStore.roomSelected.find((v) => { return (v.blockId == parent_props.blockId)})?.amount || 0;
        //     const selectAmount = roomlistStore.roomSelected.find((v) => { return (v.blockId == parent_props.blockId)})?.amount || 0;
        //     if(selectAmount != selectedOptionIndex){
        //         setSelectedOptionIndex(selectAmount);
        //     }
        // }, [roomlistStore.roomSelected])
        const setSelectedOptionIndexFN = () => {
            if (reservationStore.hotels[0]) {
                const blockReservation = _.find(reservationStore.hotels[0].booking.blocks, ['blockId', parent_props.blockId]);
                if (blockReservation) {
                    const blockAmount = blockReservation.guests.length;
                    console.log('blockReservation.guests.length', blockAmount);
                    setSelectedOptionIndex(blockAmount);
                }
            }
        }
        useEffect(() => {
            //console.log("🚀 ~ file: index.tsx ~ line 110 ~ observer ~ reservationStore", reservationStore.hotels)
            setSelectedOptionIndexFN();
        }, [parent_props.selectedAmount]);


        const handleClickE = (event: React.MouseEvent<HTMLButtonElement>) => {
            setButtonGroupWidth(Number(targetRef.current?.offsetWidth));
            setAnchorE(event.currentTarget);
            // console.log("🚀 ~ file: index.tsx ~ line 130 ~ handleClickE ~ event.currentTarget", event.currentTarget.value);
        };
        const handleClose = () => {
            setAnchorE(null);
        };
        const handleOptionClick = (event: any, index: number) => {
            setSelectedOptionIndex(index);
            setAnchorE(null);
            //setamountRoomSelect(options[index].value);
            //roomlistStore.setRoomSelected({roomId: parent_props.roomId, blockId: parent_props.blockId, amount: options[index].value});
            parent_props.setSelectedAmount(options[index].value);
            uiStore.ReservationStore.onReservationClick(options[index].value, parent_props.blockId);
        };
        const ITEM_HEIGHT = 48;
        const inputPropStyle = {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
            },
        };

        // _.find(roomlistStore.roomSelected, function(v) { return v.roomId == parent_props.roomId && v.blockId == parent_props.blockId && v.amount == options[index].value});
        // _.includes(roomlistStore.roomSelected, {roomId: parent_props.roomId, blockId: parent_props.blockId, amount: options[index].value});
        const MapOption = (option: any, index: any) => (<RenderMenuItem
            key={index}
            index={index}
            option={option}
            handleOptionClick={handleOptionClick}
            // selectedOptionIndex={(_.includes(roomlistStore.roomSelected, {roomId: parent_props.roomId, blockId: parent_props.blockId, amount: options[index].value})) ? index : 0} 
            selectedOptionIndex
        />);

        return (
            <>
                <ToggleButtonGroup
                    style={{ width: '100%', marginBottom: (isMobile) ? '15px' : '', }}
                    ref={targetRef}
                >
                    <styles.MyToggleButton
                        aria-controls="menu-review-sorting"
                        aria-haspopup="true"
                        onClick={handleClickE}
                        ref={targetRef}
                        color={color}
                    >
                        <styles.MyListItemText
                            primary={selectedOptionIndex || 0}
                            isMobile={isMobile}
                        />
                        <ArrowDropDownRoundedIcon style={{ color: ColorManager.default.black }} />
                    </styles.MyToggleButton>
                </ToggleButtonGroup>
                <styles.MyPopupMenuStyle
                    id="menu-review-sorting"
                    anchorEl={anchorE}
                    keepMounted={true}
                    open={Boolean(anchorE)}
                    onClose={handleClose}
                    width={buttonGroupWidth}
                    aria-haspopup="true"
                    PaperProps={inputPropStyle}
                >
                    {options.map(MapOption)}
                </styles.MyPopupMenuStyle>
            </>
        );
    }));

export default index;