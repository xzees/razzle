import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Parampath from 'common/models/Parampath';
import TourModel from 'modules/collective/Models/TourList/TourModel';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import InitializeManager from 'common/Manager/InitializeManager';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import ListDesktop from '../component/TourList/Desktop';
import ListMobile from '../component/TourList/Mobile';
import TourAbstract from '../component/TourList/TourAbstract';

type Props = { stores?: RootStore; match?: Parampath; tourCode: string }
const isClient = typeof window === 'object';

const ListPage = inject("stores")(
  observer((props: Props) => {
    let servData: TourModel[] = [];
    let servTotal: number = 0;
    let servSeo: any = "";
    let servCategory: any = "";

    if (!isClient) {
      servData = JSON.parse(InitializeManager.default.get())?.data?.dataTour?.data;
      servTotal = JSON.parse(InitializeManager.default.get())?.data?.dataTour?.total;
      servSeo = JSON.parse(InitializeManager.default.get())?.data?.seoMeta?.data;
      servCategory = JSON.parse(InitializeManager.default.get())?.data?.dataCaterogy?.data;
    } else {
      servData = InitializeManager.default.get()?.data?.dataTour?.data;
      servTotal = InitializeManager.default.get()?.data?.dataTour?.total;
      servSeo = InitializeManager.default.get()?.data?.seoMeta?.data;
      servCategory = InitializeManager.default.get()?.data?.dataCaterogy?.data;
    }

    const useStore = props.stores!.CollectiveRootStore;
    const tourCode = props['keyword'];
    const pageID = props['pageID'];
    const [tourList, setTourList] = React.useState<TourModel[]>(servData);
    const [tourTotal, setTourTotal] = React.useState(servTotal);
    const [seoTour] = React.useState<SEOModel>(servSeo);
    const [limit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [sortBy, setSortBy] = React.useState("");
    const [hasMore, setHasMore] = React.useState(page * limit < servTotal);
    const [loading, setLoading] = React.useState(false);
    const [selectedQuestion, toggleQuestion] = React.useState(-1);
    const [selectedPeriod, togglePeriod] = React.useState('');

    React.useEffect(() => { if (sortBy != "" && tourTotal > 0) { setLoading(true); getTourData(); } }, [sortBy]);
    React.useEffect(() => { setPage(page + 1); if (tourTotal <= 0) { getTourRelated(); } }, []);

    const getTourData = async (pushArray = false) => {
      setLoading(true);
      const resp = await useStore.apiTourListV2({ tourCode: tourCode, pageSize: limit, pageNo: page, sortBy: sortBy, pageID: pageID });
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

    const [categoryData] = React.useState<any>(servCategory);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    const [drawerOpenM, setDrawerOpenM] = React.useState(false);
    const toggleDrawerM = () => {
      setDrawerOpenM(!drawerOpenM);
    };

    return (
      <>
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            <LayoutSwitcher
              desktopView={
                <ListDesktop
                  seoTour={seoTour} tourTotal={tourTotal}
                  handleSort={handleSort}
                  loading={loading}
                  tourList={tourList}
                  hasMore={hasMore}
                  loadMore={loadMore}
                  tourRelated={tourRelated}
                  totalRelated={totalRelated}
                  linkMenu={linkMenu}
                  sortBy={sortBy}
                  categoryData={categoryData}
                  drawerOpen={drawerOpen}
                  toggleDrawer={toggleDrawer}
                  isClient={isClient}
                />
              }
              mobileView={
                <ListMobile
                  seoTour={seoTour} tourTotal={tourTotal}
                  handleSort={handleSort}
                  openQuestion={openQuestion}
                  selectedQuestion={selectedQuestion}
                  openPeriod={openPeriod}
                  selectedPeriod={selectedPeriod}
                  loading={loading}
                  tourList={tourList}
                  hasMore={hasMore}
                  loadMore={loadMore}
                  tourRelated={tourRelated}
                  totalRelated={totalRelated}
                  linkMenu={linkMenu}
                  sortBy={sortBy}
                  isMobile={true}
                  categoryData={categoryData}
                  drawerOpen={drawerOpenM}
                  toggleDrawer={toggleDrawerM}
                  isClient={isClient}
                />
              }
            />
            {seoTour ? (<TourAbstract seoTour={seoTour} />) : undefined}
          </Fragment>
        </ThemeProvider>
      </>
    )
  })
)

export default ListPage;