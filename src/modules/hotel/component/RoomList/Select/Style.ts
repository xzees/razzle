import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';

export const BoxReview = styled.div<any>`
  color: ${(props: any) => props.color || ColorManager.default.fourthColor};
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20};
  line-height: 0.8;
`;

export const RoomRoundedIcons = styled(RoomRoundedIcon)`
    width: 15px !important;
    vertical-align: middle !important;
    margin-right: 5px !important;
    // margin-bottom: 3px !important;
    color: ${ColorManager.default.fourthColor} !important;
    margin-left: -2px !important;
`;

export const MyPopupSelectStyle = styled<any>(Menu)`
    .MuiPopover-paper {
        width: ${(props: any) => props.width}px;
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
`;