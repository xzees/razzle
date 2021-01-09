import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import { SectionTour, ContainerTour } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';
import DesktopAbstract from './DesktopAbstract';
import DesktopDeparturePlan from './DesktopDeparturePlan';
import DesktopPeriod from './DesktopPeriod';
import DesktopCondition from './DesktopCondition';
import DesktopRightBox from './DesktopRightBox';
import FooterToolbar from './MobileFooter';

const renderTablet = (props: TourDetailProps) => {
  const { tourDetail, periodDesktopScroll } = props;
  return (
    <FooterToolbar tourDetail={tourDetail} periodMobileScroll={periodDesktopScroll} />
  );
};

const renderDesktop = (props: TourDetailProps) => {
  const { tourDetail, periodDesktopScroll } = props;
  return (
    <Grid key="rightContent" item xs={12} md={4} >
      <DesktopRightBox tourDetail={tourDetail} periodDesktopScroll={periodDesktopScroll} />
    </Grid>
  );
};

const DesktopContent = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, openDayPlan, selectedDayPlan, handleTabToggle, periodDesktopScroll } = props;

    const [screen, setScreen] = React.useState(false);
    const handleResize = () => {
      const windowsWidth = window.innerWidth;
      if (windowsWidth <= 991) {
        setScreen(true)
        RenderResv(screen)
      } else {
        setScreen(false)
        RenderResv(screen)
      }
    };

    React.useEffect(() => {
      var windowsWidth = window.innerWidth;
      if (windowsWidth <= 991) {
        setScreen(true)
        RenderResv(screen)
      } else {
        setScreen(false)
        RenderResv(screen)
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [screen]);

    function RenderResv(Screen: boolean) {
      if (Screen) {
        return renderTablet(props);
      } else {
        return renderDesktop(props);
      }
    }

    return (
      <SectionTour style={{ background: ColorManager.default.white }}>
        <ContainerTour>
          <DesktopAbstract tourDetail={tourDetail} />
          <Grid container spacing={3} >
            <Grid item xs={12} md={8} className={'Desktop-RContent'}>
              <DesktopDeparturePlan tourDetail={tourDetail} openDayPlan={openDayPlan} selectedDayPlan={selectedDayPlan} />
              <DesktopPeriod tourDetail={tourDetail} />
              <DesktopCondition tourDetail={tourDetail} handleTabToggle={handleTabToggle} />
            </Grid>
            {RenderResv(screen)}
          </Grid>
        </ContainerTour>
      </SectionTour>
    )
  })
)

export default DesktopContent;