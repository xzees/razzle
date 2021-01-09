import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { LinearProgress } from '@material-ui/core';
import { Button } from 'common/components/Button';
import { SectionTour, ContainerTour } from './Mobile.style';
import MobileTop from './MobileTop';
import MobileList from './MobileList';
import TourNotFound from './TourNotFound';
import TourRelated from './TourRelated';
import MobileContact from './MobileContact';
import DrawerCategory from './DrawerCategory';

type Props = {
  seoTour: any;
  tourTotal: number;
  handleSort: any;
  openQuestion: any;
  selectedQuestion: any;
  openPeriod: any;
  selectedPeriod: any;
  loading: boolean;
  tourList: any[];
  hasMore: boolean;
  loadMore: any;
  tourRelated: any[];
  totalRelated: number;
  linkMenu: string;
  sortBy?: string;
  isMobile?: boolean;
  servCategory?: any;
  categoryData?: any;
  drawerOpen?: any;
  toggleDrawer?: any;
  isClient?: any;
}

const Mobile = inject("stores")(
  observer((props: Props) => {
    const {
      seoTour,
      tourTotal,
      handleSort,
      openQuestion,
      selectedQuestion,
      openPeriod,
      selectedPeriod,
      loading,
      tourList,
      hasMore,
      loadMore,
      tourRelated,
      totalRelated,
      linkMenu,
      sortBy,
      isMobile,
      categoryData,
      drawerOpen,
      toggleDrawer,
      isClient
    } = props;

    const variantProps = isClient ? { variant: "temporary" as "temporary" } : { variant: "persistent" as "persistent" };

    return (
      <>
        {seoTour ? (<MobileTop seoTour={seoTour} tourTotal={tourTotal} handleSort={handleSort} sortBy={sortBy} />) : undefined}
        <SectionTour>
          <ContainerTour>
            {tourList?.length > 0 ? (
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
        <>
          <MobileContact category={categoryData} toggleDrawer={toggleDrawer} />
          <DrawerCategory {...variantProps} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} seoTour={seoTour} categoryData={categoryData} isMobile={isMobile} />
        </>
      </>
    )
  })
)

export default Mobile;