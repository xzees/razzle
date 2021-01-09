import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import {
  createStyles,
  makeStyles,
  Tabs,
  Tab,
  Theme,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';

interface StyledTabProps {
  label: string;
}

const MuiTabs = withStyles({
  indicator: {
    height: 3,
    backgroundColor: ColorManager.default.primaryColor,
  },
})(Tabs);

const MuiTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 'bold',
      opacity: 1,
      '&:not(:last-child)': {
        marginRight: theme.spacing(4),
      },
      '& .MuiTab-wrapper': {
        flexDirection: 'row',
        '& > .MuiSvgIcon-root': {
          color: ColorManager.default.primaryColor,
          marginRight: 6,
        },
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

type Props = {
  value: number;
  labels: any[];
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
};

const MainTab: FunctionComponent<Props> = ({ value, labels, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiTabs
        value={value}
        variant="scrollable"
        scrollButtons="off"
        onChange={onChange}
      >
        {labels &&
          _.map(labels, (label: string) => {
            return <MuiTab label={label} />;
          })}
      </MuiTabs>
    </div>
  );
};

export default MainTab;
