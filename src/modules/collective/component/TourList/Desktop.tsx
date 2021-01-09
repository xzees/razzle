import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { LinearProgress } from '@material-ui/core';
import { Button } from 'common/components/Button';
import BannerSection from '../Banner/List';
import { SectionTour, ContainerTour, BoxMain } from './Desktop.style';
import DesktopTop from './DesktopTop';
import DesktopList from './DesktopList';
import TourNotFound from './TourNotFound';
import TourRelated from './TourRelated';
import DesktopContact from './DesktopContact';
import DrawerCategory from './DrawerCategory';

type Props = {
  seoTour: any;
  tourTotal: number;
  handleSort: any;
  loading: boolean;
  tourList: any[];
  hasMore: boolean;
  loadMore: any;
  tourRelated: any[];
  totalRelated: number;
  linkMenu: string;
  sortBy?: string;
  servCategory?: any;
  categoryData?: any;
  drawerOpen?: any;
  toggleDrawer?: any;
  isClient?: any;
}

const Desktop = inject("stores")(
  observer((props: Props) => {
    const {
      seoTour,
      tourTotal,
      handleSort,
      loading,
      tourList,
      hasMore,
      loadMore,
      tourRelated,
      totalRelated,
      linkMenu,
      sortBy,
      categoryData,
      drawerOpen,
      toggleDrawer,
      isClient
    } = props;

    const variantProps = isClient ? { variant: "temporary" as "temporary" } : { variant: "persistent" as "persistent" };

    return (
      <>
        {seoTour ? (<BannerSection seoModel={seoTour} tourTotal={tourTotal} />) : undefined}
        <SectionTour>
          <ContainerTour>
            <DesktopTop
              handleSort={handleSort}
              seoTour={seoTour}
              sortBy={sortBy}
            />
            <div style={{ background: 'unset', paddingTop: '0.625rem', paddingBottom: '1.5rem' }}>
              {tourList?.length > 0 ? (
                <BoxMain>
                  {tourList?.map((tourData, index) => (
                    <DesktopList
                      tourData={tourData}
                      index={index}
                      key={index}
                    />
                  ))}
                  {loading ? <LinearProgress /> : hasMore && <Button fontSize="1.3125rem" height="auto" padding="0" onClick={loadMore}>{i18n.t('collective.list.loadmore')}</Button>}
                </BoxMain>
              ) : tourTotal <= 0 ? (<TourNotFound />) : undefined}
            </div>
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
          <DesktopContact category={categoryData} toggleDrawer={toggleDrawer} />
          <DrawerCategory {...variantProps} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} seoTour={seoTour} categoryData={categoryData} />
        </>
      </>
    )
  })
)

export default Desktop;