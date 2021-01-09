
import styled, { css } from 'styled-components';
import { TextField } from "@material-ui/core";
import ScreenManager from 'common/Manager/ScreenManager';
import ColorManager from 'common/Manager/ColorManager';
import { Grid, Box } from '@material-ui/core';

interface PropsBox {
  focus: boolean
}

const Style = {
  
  BoxLabel: styled(Box)`
    flex:auto;
    text-align:center;
    align-self:center;
    padding: 10px;
  `,
};

export default Style;