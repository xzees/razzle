import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import Banner from 'modules/main/component/Banner';
import { Paper, Box } from '@material-ui/core';
import {
  AllInbox,
  CardTravel,
  Flag,
  Hotel,
  SimCard,
  Train,
} from '@material-ui/icons';
import MainTab from 'modules/package/components/MainTab';
import SearchDestination from 'modules/package/components/SearchDestination';

type Props = {
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
};

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const { tabIndex, setTabIndex } = props;

  return (
    <Banner>
      <Box width={['100%', '100%', '90%', '80%', '70%']} margin="0 auto">
        <Paper elevation={5}>
          <MainTab
            value={tabIndex}
            labels={[
              <>
                <AllInbox />
                ทั้งหมด
              </>,
              <>
                <Flag />
                กิจกรรมที่น่าสนใจ
              </>,
              <>
                <Train />
                บัตรโดยสารรถไฟ
              </>,
              <>
                <Hotel />
                โรงแรมที่พัก
              </>,
              <>
                <SimCard />
                WiFi & Sim Card
              </>,
              <>
                <CardTravel />
                การเดินทาง
              </>,
            ]}
            onChange={(event: React.ChangeEvent<{}>, newValue: number) =>
              setTabIndex(newValue)
            }
          />
        </Paper>
        <Box mt={3}>
          <SearchDestination isMobile={false} />
        </Box>
      </Box>
    </Banner>
  );
};

export default Desktop;
