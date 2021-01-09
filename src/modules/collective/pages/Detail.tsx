import React, { Fragment, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Parampath from 'common/models/Parampath';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import DetailDesktop from '../component/TourDetail/Desktop';
import DetailMobiles from '../component/TourDetail/Mobile';
import InitializeManager from 'common/Manager/InitializeManager';
import TourModel from 'modules/collective/Models/TourDetail/TourModel';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import TourRecommend from '../component/TourDetail/TourRecommend';

type Props = { stores?: RootStore; match?: Parampath; tourID: number }
const isClient = typeof window === 'object';

export const downloadPDF = (path: string, method: string, params: any): void => {
  if (isClient) {
    var form: any = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "_blank");

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
}

const DetailPage = inject("stores")(
  observer((props: Props) => {
    let servData: any = "";
    if (!isClient) {
      servData = JSON.parse(InitializeManager.default.get())?.data?.tourData?.data;
    } else {
      servData = InitializeManager.default.get()?.data?.tourData?.data;
    }
    const useStore = props.stores!.CollectiveRootStore;
    const tourID = props.match?.params.tourID;

    const [dataDetail, setDataDetail] = React.useState<TourModel>(servData);

    React.useEffect(() => {
      getTourRecommend();
    }, []);
    const [tourRecommend, setTourRecommend] = React.useState([]);
    const getTourRecommend = async () => {
      const resp = await useStore.apiTourRecommend(tourID);
      if (resp.data.status == 200 && resp.data.data) {
        setTourRecommend(resp.data.data);
      }
    }

    const [selectedDayPlan, toggleDayPlan] = React.useState(-1);
    function openDayPlan(index: React.SetStateAction<number>) {
      toggleDayPlan(selectedDayPlan === index ? -1 : index);
    }

    const [selectedPeriod, togglePeriod] = React.useState('');
    function openPeriod(index: React.SetStateAction<string>) {
      togglePeriod(selectedPeriod === index ? '' : index);
    }

    const handleTabToggle = (event: any) => {
      if (event.target.parentNode.classList.contains('tabOpen')) {
        event.target.parentNode.classList.remove('tabOpen')
      } else {
        event.target.parentNode.classList.add('tabOpen')
      }
    }

    function periodDesktopScroll() {
      // var element: any = document.getElementById("tourDeskPeriod");
      // element.scrollIntoView({ behavior: "smooth", block: "start" });
      const id = 'tourDeskPeriod';
      const yOffset = -70;
      const element: any = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    function periodMobileScroll() {
      // var element: any = document.getElementById("tourMobPeriod");
      // element.scrollIntoView({ behavior: "smooth", block: "start" });
      const id = 'tourMobPeriod';
      const yOffset = -75;
      const element: any = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
      <>
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            <LayoutSwitcher
              desktopView={
                <DetailDesktop
                  dataDetail={dataDetail}
                  tourID={tourID}
                  openDayPlan={openDayPlan}
                  selectedDayPlan={selectedDayPlan}
                  handleTabToggle={handleTabToggle}
                  periodDesktopScroll={periodDesktopScroll}
                  isClient={isClient}
                />
              }
              mobileView={
                <DetailMobiles
                  dataDetail={dataDetail}
                  tourID={tourID}
                  openDayPlan={openDayPlan}
                  selectedDayPlan={selectedDayPlan}
                  openPeriod={openPeriod}
                  selectedPeriod={selectedPeriod}
                  handleTabToggle={handleTabToggle}
                  isMobile={true}
                  periodMobileScroll={periodMobileScroll}
                  isClient={isClient}
                />
              }
            />
            {isClient && tourRecommend.length > 0 ? (<TourRecommend tourRecommend={tourRecommend} />) : undefined}
          </Fragment>
        </ThemeProvider>
      </>
    )
  })
)

export default DetailPage;