import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid, LinearProgress } from '@material-ui/core';
import { Button } from 'common/components/Button';
import BannerSection from '../Banner/List';
import { SectionTour, ContainerTour, BoxMain } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import DesktopTop from './DesktopTop';
import DesktopList from './DesktopList';
import TourNotFound from './TourNotFound';
import DesktopTourFilter from './DesktopTourFilter';
import TourRelated from './TourRelated';

type Props = {
  servSeo: any;
  servTotal: number;
  seoTour: any;
  tourTotal: number;
  handleSort: any;
  servData: any[];
  loading: boolean;
  hasMoreServ: boolean;
  // infiniteRef: any;
  tourList: any[];
  hasMore: boolean;
  loadMore: any;
  tourFilter: any;
  tourRelated: any[];
  totalRelated: number;
  linkMenu: string;
  sortBy?: string;
}

const Desktop = inject("stores")(
  observer((props: Props) => {
    const {
      servSeo,
      servTotal,
      seoTour,
      tourTotal,
      handleSort,
      servData,
      loading,
      hasMoreServ,
      // infiniteRef,
      tourList,
      hasMore,
      loadMore,
      tourFilter,
      tourRelated,
      totalRelated,
      linkMenu,
      sortBy,
    } = props;

    return (
      <>
        {servSeo ? (<BannerSection seoModel={servSeo} tourTotal={servTotal} />) : undefined}
        {seoTour ? (<BannerSection seoModel={seoTour} tourTotal={tourTotal} />) : undefined}
        <SectionTour>
          <ContainerTour>
            <DesktopTop
              handleSort={handleSort}
              servSeo={servSeo}
              seoTour={seoTour}
              sortBy={sortBy}
            />
            <div style={{ background: 'unset', paddingTop: '0.625rem', paddingBottom: '1.5rem' }}>
              <Grid container spacing={3} >
                <Grid item xs={3} md={3} >
                  <DesktopTourFilter tourFilter={tourFilter} />
                </Grid>

                <Grid item xs={9} md={9}>
                  {servData?.length > 0 ? (
                    <BoxMain>
                      {servData?.map((tourData, index) => (
                        <DesktopList
                          tourData={tourData}
                          index={index}
                          key={index}
                        />
                      ))}
                      {loading ? <LinearProgress /> : hasMoreServ && <Button fontSize="1.3125rem" height="auto" padding="0" onClick={loadMore}
                        style={{
                          color: ColorManager.default.white, width: '100%', border: 0, height: 'auto', padding: 0, background: ColorManager.default.primaryColor, boxShadow: 'unset',
                          borderRadius: '4px'
                        }}
                      >{i18n.t('collective.list.loadmore')}</Button>}
                    </BoxMain>
                  ) : undefined}
                  {servData?.length == 0 ? (
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
                  {tourTotal <= 0 ? (<TourNotFound />) : undefined}
                </Grid>
              </Grid>
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
      </>
    )
  })
)

export default Desktop;