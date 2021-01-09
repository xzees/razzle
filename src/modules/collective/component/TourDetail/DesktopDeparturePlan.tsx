import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import ReactHtmlParser from 'react-html-parser';
import Heading from 'common/src/components/Heading';
import { h2Style, BoxPlan, PlanTitle, IconPlan, PlanDetail, DaySidebar, DayData, PlanDay, TagDay, TagNum, PlanData, ExPlanPanel, ExPlanTab, ExPlanTitle, ExPlanDetail, IconExPlan } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const DesktopDeparturePlan = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, openDayPlan, selectedDayPlan } = props;

    const [Screen, setScreen] = React.useState(false);
    const handleResize = () => {
      const windowsWidth = window.innerWidth;
      if (windowsWidth <= 991) {
        setScreen(true)
      } else {
        setScreen(false)
      }
    };

    const [height, setHeight] = React.useState(0);
    const refs: any = React.useRef();
    const updateWidthAndHeight = () => {
      var screenWidth = screen.width;
      var windowWidth = window.innerWidth;
      var heightRef = refs.current.clientHeight;
      var windowHeight = window.innerHeight;
      if (screenWidth === windowWidth) {
        setHeight(0);
      }
      else {
        if (heightRef > windowHeight) {
          // setHeight(window.innerHeight - 70);
          if (Screen) {
            setHeight(window.innerHeight - 143);
          } else {
            setHeight(window.innerHeight - 73);
          }
        } else {
          setHeight(0);
        }
      }
    };

    React.useEffect(() => {
      var screenWidth = screen.width;
      var windowWidth = window.innerWidth;
      var heightRef = refs.current.clientHeight;
      var windowHeight = window.innerHeight;
      if (screenWidth === windowWidth) {
        setHeight(0);
      }
      else {
        if (heightRef > windowHeight) {
          if (windowWidth <= 991) {
            setHeight(window.innerHeight - 143);
          } else {
            setHeight(window.innerHeight - 73);
          }
        } else {
          setHeight(0);
        }
      }
    }, []);

    React.useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    });

    React.useEffect(() => {
      // var screenWidth = screen.width;
      // var windowWidth = window.innerWidth;
      // var heightRef = refs.current.clientHeight;
      // var windowHeight = window.innerHeight;
      // if (screenWidth === windowWidth) {
      //   setHeight(0);
      //   console.log('1')
      // }
      // else {
      //   console.log('2')
      //   if (heightRef > windowHeight) {
      //     // setHeight(window.innerHeight - 70);
      //     if (windowWidth <= 991) {
      //       setHeight(window.innerHeight - 143);
      //     } else {
      //       setHeight(window.innerHeight - 73);
      //     }
      //   } else {
      //     setHeight(0);
      //   }
      // }
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
      // window.addEventListener('resize', () => { handleResize(); updateWidthAndHeight(); });
      // return () => window.removeEventListener('resize', () => { handleResize(); updateWidthAndHeight(); });
    }, [Screen]);

    return (
      <BoxPlan id="departure-plan">
        <PlanTitle><IconPlan htmlColor={ColorManager.default.primaryColor} /><Heading content={i18n.t('collective.detail.depplan.title')} {...h2Style} /></PlanTitle>
        {tourDetail?.information ? (
          <PlanDetail>
            <DaySidebar id="daysidebar" className="nav-day" style={{ height: height <= 0 ? '100%' : `${height}px`, overflowY: height <= 0 ? 'unset' : 'scroll' }}>
              {tourDetail?.information.map((plan, index) => (
                <DayData key={`daytitle${index}`} className={`dayDate${selectedDayPlan === index ? ' expanded' : ''}`} onClick={() => openDayPlan(index)}>
                  <PlanDay className="plan-day">
                    <TagDay className="tag-day">{i18n.t('collective.detail.depplan.tagday')}</TagDay>
                    <TagNum className="tag-num">{plan?.dayNum}</TagNum>
                  </PlanDay>
                </DayData>
              ))}
            </DaySidebar>
            <PlanData id="plan-data" ref={refs}>
              {tourDetail?.information.map((plan, index) => (
                <ExPlanPanel key={`dayplan${index}`} className={`explanDate${selectedDayPlan === index ? ' expanded' : ''}`}>
                  <ExPlanTab id={`panel${index}bh-header`} onClick={() => openDayPlan(index)}>
                    <ExPlanTitle>
                      <span>{i18n.t('collective.detail.depplan.explantitle')} {plan?.dayNum}</span>{plan?.title}
                    </ExPlanTitle>
                    <IconExPlan />
                  </ExPlanTab>
                  <ExPlanDetail className="planDetail">
                    {/* {plan?.meal} */}
                    {ReactHtmlParser(plan?.detailHtml)}
                  </ExPlanDetail>
                </ExPlanPanel>
              ))}
            </PlanData>
          </PlanDetail>
        ) : i18n.t('collective.detail.depplan.no')}
      </BoxPlan>
    )
  })
)

export default DesktopDeparturePlan;