//Manager
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
//MUI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const textHeaderStyle = { fontSize: FontManager.default.TEXT_MEDIUM_22, fontFamily: FontManager.default.secondaryFont };
export const textnormalStyle = { fontSize: FontManager.default.TEXT_TINY_18 };
export const dividerStyle = { marginTop: '8px', marginBottom: '8px' };
export const cardStyle = { marginBottom: '16px', padding: '16px' };
export const labelStyle = { fontSize: FontManager.default.TEXT_MEDIUM_22, span: { fontSize: FontManager.default.TEXT_MEDIUM_22 } };
export const helperTextStyle = { fontSize: FontManager.default.TEXT_TINY_EXTRA_17, color: ColorManager.default.redColor };

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiInputBase-input': {
                paddingLeft: '6px',
                paddingRight: '6px',
                color: ColorManager.default.black,
            },
            '& .MuiInputLabel-root': {
                color: ColorManager.default.black,
            },
            '& .MuiFormLabel-root': {
                color: ColorManager.default.black,
            },
            '& .MuiCardContent-root': {
                padding: '0px',
            },
            '& .MuiFormControlLabel-label': {
                color: ColorManager.default.black,
                '&.Mui-disabled': {
                    color: ColorManager.default.black,
                },
            },
            '& .MuiRadio-colorSecondary': {
                color: ColorManager.default.fifthColor,
                '&.Mui-disabled': {
                    color: ColorManager.default.fifthColor,
                },
            },
            '& .MuiCheckbox-colorSecondary': {
                color: ColorManager.default.fifthColor,
                '&.Mui-disabled': {
                    color: ColorManager.default.fifthColor,
                },
            }
        },
    }),
);