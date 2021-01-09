import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import FontManager from 'modules/hotel/Manager/FontManager';

const useStylesBootstrap = makeStyles((theme: Theme) => ({
    arrow: {
      color: theme.palette.common.white,
    },
    tooltip: {
        padding: '10px 30px 10px 30px',
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderRadius: '4px',
        filter: 'drop-shadow(0px 2px 1px rgba(0,0,0,0.1))',
        fontSize: FontManager.default.TEXT_TINY_18
    },
  }));
  
const BootstrapTooltip = (props: TooltipProps) => {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow={true} classes={classes} {...props} placement="top" />;
};

export default BootstrapTooltip;