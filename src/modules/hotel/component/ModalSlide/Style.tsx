import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import FontManager from 'modules/hotel/Manager/FontManager';
import Modal from '@material-ui/core/Modal';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import ColorManager from 'common/Manager/ColorManager';


export const Modals = styled<any>(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000 !important;
`
export const Papers = styled<any>(Modal)`
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
`
export const CoverBtn = styled.a<any>`
    cursor: pointer;
`

export const ClearRoundedIcons = styled(ClearRoundedIcon)`
    color: ${ColorManager.default.white};
    cursor: pointer;
    font-size: ${FontManager.default.LARGE_EXTRA_40} !important;
    svg {
        font-size: ${FontManager.default.LARGE_EXTRA_40} !important;
    }
`;