import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import Banner from 'modules/main/component/Banner';
import { Paper, Grid } from '@material-ui/core';
import { Label } from 'common/components/Label';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';
import FlagIcon from '@material-ui/icons/Flag';
import TrainIcon from '@material-ui/icons/Train';
import HotelIcon from '@material-ui/icons/Hotel';
import SimCardIcon from '@material-ui/icons/SimCard';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SearchDestination from 'modules/package/components/SearchDestination';
import ModalScreen from 'modules/package/components/ModalScreen';
import AutoCompleteSearch from 'modules/package/components/AutoCompleteSearch';

type Props = {};

const Mobile: FunctionComponent<Props> = (props: Props) => {
  const {} = props;

  return (
    <Banner>
      {/* <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={5} style={{ padding: "5px" }}>
                <FlagIcon />
                <br />
                <Label
                  fontSize={FontManager.default.extraSmall}
                  color={ColorManager.default.black}
                >
                  กิจกรรมที่หน้าสนใจ
                  </Label>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={5} style={{ padding: "5px" }}>
                <TrainIcon />
                <br />
                <Label
                  fontSize={FontManager.default.extraSmall}
                  color={ColorManager.default.black}
                >
                  บัตรโดยสารรถไฟ
                  </Label>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={5} style={{ padding: "5px" }}>
                <HotelIcon />
                <br />
                <Label
                  fontSize={FontManager.default.extraSmall}
                  color={ColorManager.default.black}
                >
                  โรงแรมที่พัก
                  </Label>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={5} style={{ padding: "5px" }}>
                <SimCardIcon />
                <br />
                <Label
                  fontSize={FontManager.default.extraSmall}
                  color={ColorManager.default.black}
                >
                  WiFi & ซิมการ์ด
                  </Label>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={5} style={{ padding: "5px" }}>
                <CardTravelIcon />
                <br />
                <Label
                  fontSize={FontManager.default.extraSmall}
                  color={ColorManager.default.black}
                >
                  การเดินทาง
                  </Label>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <SearchDestination isMobile />
    </Banner>
  );
};

export default Mobile;
