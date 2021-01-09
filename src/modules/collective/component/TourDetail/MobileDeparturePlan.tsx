import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import ReactHtmlParser from 'react-html-parser';
import Heading from 'common/src/components/Heading';
import { h2Style, BoxPlan, PlanTitle, IconPlan, PlanDetail, DaySidebar, DayData, PlanDay, TagDay, TagNum, PlanData, ExPlanPanel, ExPlanTab, ExPlanTitle, IconExPlan, ExPlanDetail } from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const MobileDeparturePlan = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, openDayPlan, selectedDayPlan } = props;

    const [height, setHeight] = React.useState(0);
    const ref: any = React.useRef();
    const updateWidthAndHeight = () => {
      var heightRef = ref.current.clientHeight;
      var windowHeight = window.innerHeight;
      if (heightRef > windowHeight) {
        // setHeight(window.innerHeight - 57);
        setHeight(window.innerHeight - 147);
      } else {
        setHeight(0);
      }
    };
    React.useEffect(() => {
      var heightRef = ref.current.clientHeight;
      var windowHeight = window.innerHeight;
      if (heightRef > windowHeight) {
        // setHeight(window.innerHeight - 57);
        setHeight(window.innerHeight - 147);
      } else {
        setHeight(0);
      }
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

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
            <PlanData id="plan-data" ref={ref}>
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

export default MobileDeparturePlan;