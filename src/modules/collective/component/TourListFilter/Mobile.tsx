import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { LinearProgress } from '@material-ui/core';
import { Button } from 'common/components/Button';
import { SectionTour, ContainerTour, List } from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import MobileTop from './MobileTop';
import MobileList from './MobileList';
import TourNotFound from './TourNotFound';
import TourRelated from './TourRelated';
import ContactMobile from 'common/components/ContactMobile';
import DLAppMobile from 'common/components/DLAppMobile';

type Props = {
  servSeo: any;
  servTotal: number;
  seoTour: any;
  tourTotal: number;
  handleSort: any;
  servData: any[];
  openQuestion: any;
  selectedQuestion: any;
  openPeriod: any;
  selectedPeriod: any;
  loading: boolean;
  hasMoreServ: boolean;
  // infiniteRefMobile: any;
  tourList: any[];
  hasMore: boolean;
  loadMore: any;
  tourFilter: any;
  tourRelated: any[];
  totalRelated: number;
  linkMenu: string;
  sortBy?: string;
  isMobile?: boolean;
}

const Mobile = inject("stores")(
  observer((props: Props) => {
    const {
      servSeo,
      servTotal,
      seoTour,
      tourTotal,
      handleSort,
      servData,
      openQuestion,
      selectedQuestion,
      openPeriod,
      selectedPeriod,
      loading,
      hasMoreServ,
      // infiniteRefMobile,
      tourList,
      hasMore,
      loadMore,
      tourFilter,
      tourRelated,
      totalRelated,
      linkMenu,
      sortBy,
      isMobile,
    } = props;

    return (
      <>
        {servSeo ? (<MobileTop seoTour={servSeo} tourTotal={servTotal} handleSort={handleSort} tourFilter={tourFilter} sortBy={sortBy} isMobile={isMobile} />) : undefined}
        {seoTour ? (<MobileTop seoTour={seoTour} tourTotal={tourTotal} handleSort={handleSort} tourFilter={tourFilter} sortBy={sortBy} isMobile={isMobile} />) : undefined}
        <SectionTour>
          <ContainerTour>
            {servData?.length > 0 ? (
              <>
                {servData?.map((tourData, index) => (
                  <MobileList
                    tourData={tourData}
                    index={index}
                    openQuestion={openQuestion}
                    selectedQuestion={selectedQuestion}
                    openPeriod={openPeriod}
                    selectedPeriod={selectedPeriod}
                    isMobile={true}
                    key={index}
                  />
                ))}
                {loading ? <LinearProgress /> : hasMoreServ && <Button fontSize="1.3125rem" height="auto" padding="0" onClick={loadMore}
                  style={{
                    color: ColorManager.default.white, width: '100%', border: 0, height: 'auto', padding: 0, background: ColorManager.default.primaryColor, boxShadow: 'unset',
                    borderRadius: '4px'
                  }}
                >{i18n.t('collective.list.loadmore')}</Button>}
              </>
            ) : undefined}
            {servData?.length == 0 ? (
              <>
                {tourList?.map((tourData, index) => (
                  <MobileList
                    tourData={tourData}
                    index={index}
                    openQuestion={openQuestion}
                    selectedQuestion={selectedQuestion}
                    openPeriod={openPeriod}
                    selectedPeriod={selectedPeriod}
                    isMobile={true}
                    key={index}
                  />
                ))}
                {loading ? <LinearProgress /> : hasMore && <Button fontSize="1.3125rem" height="auto" padding="0" onClick={loadMore}>{i18n.t('collective.list.loadmore')}</Button>}
              </>
            ) : tourTotal <= 0 ? (<TourNotFound />) : undefined}
            {tourTotal <= 0 ? (<TourNotFound />) : undefined}
          </ContainerTour>
          <>
            {tourRelated?.length > 0 ? (
              <TourRelated
                tourRelated={tourRelated}
                totalRelated={totalRelated}
                linkMenu={linkMenu}
              />
            ) : undefined}
          </>
        </SectionTour>
        <ContactMobile />
        <DLAppMobile />
      </>
    )
  })
)

export default Mobile;