import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import styled from 'styled-components';
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';

export const BoxReview = styled.div<any>`
  color: ${(props: any) => props.color || ColorManager.default.black};
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20};
  line-height: 0.8;
`;

export const RoomRoundedIcons = styled(ArrowLeftRoundedIcon)`
    vertical-align: middle !important;
    margin-right: 0px;
    color: ${ColorManager.default.black} !important;
    margin-left: -6px !important;
`;