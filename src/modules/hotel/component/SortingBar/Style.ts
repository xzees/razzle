import { Rating } from '@material-ui/lab';
import styled from 'styled-components';
import { makeStyles  } from '@material-ui/core/styles';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import ColorManager from 'common/Manager/ColorManager';
import { ToggleButton } from '@material-ui/lab';
import FontManager from 'modules/hotel/Manager/FontManager';

export const styleFormControlLabel = {
    style: {
        color: '#888aaa',
    }
};

export const Boxs = makeStyles({
    formControlLabel: {
        "&.MuiBox-root": {
            marginTop: '0px !important'
        }
    }
});

export const styleRadioGroup = {
    row: true,
    'aria-label': 'orderby_price',
    name: 'orderby_price'
};

/*
export const StyleToggleButton = styled(ToggleButton)`
    width: 100%;
    color: ${ColorManager.default.white};
    border: 1px solid rgba(0, 0, 0, 1);
    &.Mui-selected{
        background-color: ${ColorManager.default.primaryColor};
        font-size: ${FontManager.default.primaryFont};
      }
`;
*/

export const StyleToggleButton = styled(ToggleButton)({
    width: '100%',
    color: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 1)',
  });
