import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Parampath from 'common/models/Parampath';
import TourModel from 'modules/collective/Models/TourList/TourModel';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import TourFilterModel from '../Models/TourFilter/TourFilterModel';
import InitializeManager from 'common/Manager/InitializeManager';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import ListDesktop from '../component/TourListFilter/Desktop';
import ListMobile from '../component/TourListFilter/Mobile';
import TourAbstract from '../component/TourListFilter/TourAbstract';

type Props = { stores?: RootStore; match?: Parampath; tourCode: string }

const ListPage = inject("stores")(
  observer((props: Props) => {
    let servData: TourModel[] = [];
    let servTotal: number = 0;
    let servSeo: any = "";
    try {
      servData = JSON.parse(InitializeManager.default.get())?.data?.dataTour?.data;
      servTotal = JSON.parse(InitializeManager.default.get())?.data?.dataTour?.total;
      servSeo = JSON.parse(InitializeManager.default.get())?.data?.seoMeta?.data;
    } catch (error) {
      servData = [];
      servTotal = 0;
      servSeo = "";
    }
    const useStore = props.stores!.CollectiveRootStore;
    const tourCode = props.match?.params.tourCode;
    // const theme = useTheme();
    const [tourList, setTourList] = React.useState<TourModel[]>(InitializeManager.default.get()?.data?.dataTour?.data);
    const [tourTotal, setTourTotal] = React.useState(InitializeManager.default.get()?.data?.dataTour?.total);
    const [seoTour] = React.useState<SEOModel>(InitializeManager.default.get()?.data?.seoMeta?.data);
    const [limit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [sortBy, setSortBy] = React.useState("");
    const [hasMore, setHasMore] = React.useState(page * limit < InitializeManager.default.get()?.data?.dataTour?.total);
    const [hasMoreServ] = React.useState(1 * 10 < servTotal);
    const [loading, setLoading] = React.useState(false);
    const [selectedQuestion, toggleQuestion] = React.useState(-1);
    const [selectedPeriod, togglePeriod] = React.useState('');

    React.useEffect(() => { if (sortBy != "") { getTourData(); } }, [sortBy]);
    React.useEffect(() => {
      setPage(page + 1);
      if (tourTotal <= 0) { getTourRelated(); }
      if (tourTotal > 0) { getTourFilter(); }
    }, []);

    // const getTourData = async (pushArray = false) => {
    //   if (pushArray === false || (pushArray === true && hasMore === true)) {
    //     setLoading(true);
    //     const resp = await useStore.apiTourList({ tourCode: tourCode, pageSize: limit, pageNo: page, sortBy: sortBy });
    //     if (resp.data.status == 200) {
    //       if (pushArray == true) {
    //         setTourList([...tourList, ...resp.data.data]);
    //       } else {
    //         setTourList(resp.data.data);
    //       }
    //       setPage(page + 1);
    //       setHasMore(page * limit < resp.data.total);
    //       setTourTotal(resp.data.total);
    //     }
    //     setLoading(false);
    //   }
    // }
    const getTourData = async (pushArray = false) => {
      setLoading(true);
      const resp = await useStore.apiTourList({ tourCode: tourCode, pageSize: limit, pageNo: page, sortBy: sortBy });
      if (resp.data.status == 200) {
        if (pushArray == true) {
          setTourList([...tourList, ...resp.data.data]);
        } else {
          setTourList(resp.data.data);
        }
        setPage(page + 1);
        setHasMore(page * limit < resp.data.total);
        setTourTotal(resp.data.total);
      }
      setLoading(false);
    }
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setTourList([]);
      setPage(1);
      setSortBy(e.target.value);
      setHasMore(false);
    }
    const loadMore = () => {
      getTourData(true);
    }
    function openQuestion(index: React.SetStateAction<number>) {
      toggleQuestion(selectedQuestion === index ? -1 : index);
    }
    function openPeriod(index: React.SetStateAction<string>) {
      togglePeriod(selectedPeriod === index ? '' : index);
    }

    const [tourFilter, setTourFilter] = React.useState<TourFilterModel>();
    const getTourFilter = async () => {
      const resp = await useStore.apiTourFilter(tourCode);
      if (resp.data.status == 200) {
        setTourFilter(resp.data.data);
      }
    }

    const [tourRelated, setTourRelated] = React.useState([]);
    const [totalRelated, setTotalRelated] = React.useState(0);
    const [linkMenu, setLinkMenu] = React.useState('');
    const getTourRelated = async () => {
      const resp = await useStore.apiTourRelated(tourCode);
      if (resp.data.status == 200) {
        setTourRelated(resp.data.data.tourList);
        setTotalRelated(resp.data.data.total);
        setLinkMenu(resp.data.data.page);
      }
    }

    // const infiniteRef = useInfiniteScroll<HTMLUListElement>({
    //   loading,
    //   hasNextPage: useMediaQuery(theme.breakpoints.up('sm')),
    //   onLoadMore: loadMore,
    //   scrollContainer: 'window',
    // });

    // const infiniteRefMobile = useInfiniteScroll<HTMLUListElement>({
    //   loading,
    //   hasNextPage: useMediaQuery(theme.breakpoints.down('xs')),
    //   onLoadMore: loadMore,
    //   scrollContainer: 'window',
    // });

    return (
      <>
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            <LayoutSwitcher
              desktopView={
                <ListDesktop
                  servSeo={servSeo} servTotal={servTotal}
                  seoTour={seoTour} tourTotal={tourTotal}
                  handleSort={handleSort}
                  servData={servData}
                  loading={loading}
                  hasMoreServ={hasMoreServ}
                  // infiniteRef={infiniteRef}
                  tourList={tourList}
                  hasMore={hasMore}
                  loadMore={loadMore}
                  tourFilter={tourFilter}
                  tourRelated={tourRelated}
                  totalRelated={totalRelated}
                  linkMenu={linkMenu}
                  sortBy={sortBy}
                />
              }
              mobileView={
                <ListMobile
                  servSeo={servSeo} servTotal={servTotal}
                  seoTour={seoTour} tourTotal={tourTotal}
                  handleSort={handleSort}
                  servData={servData}
                  openQuestion={openQuestion}
                  selectedQuestion={selectedQuestion}
                  openPeriod={openPeriod}
                  selectedPeriod={selectedPeriod}
                  loading={loading}
                  hasMoreServ={hasMoreServ}
                  // infiniteRefMobile={infiniteRefMobile}
                  tourList={tourList}
                  hasMore={hasMore}
                  loadMore={loadMore}
                  tourFilter={tourFilter}
                  tourRelated={tourRelated}
                  totalRelated={totalRelated}
                  linkMenu={linkMenu}
                  sortBy={sortBy}
                  isMobile={true}
                />
              }
            />
            {servSeo ? (<TourAbstract seoTour={servSeo} />) : undefined}
            {seoTour ? (<TourAbstract seoTour={seoTour} />) : undefined}
          </Fragment>
        </ThemeProvider>
      </>
    )
  })
)

export default ListPage;