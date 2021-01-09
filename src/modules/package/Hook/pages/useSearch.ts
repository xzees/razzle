import _ from 'lodash';
import { useEffect, useState } from 'react';
import qs from 'query-string';
import PackageManager, {
  SearchCountryDestinationParams,
} from 'modules/package/Manager/PackageManager';
import DestinationModel from 'modules/package/Models/GetModel/Destination/DestinationModel';
import CountryDestinationModel from 'modules/package/Models/GetModel/CountryDestination/CountryDestinationModel';
import activities from 'modules/package/data/activities.json';

enum SortBy {
  RECOMMEND = 'recommend',
  PRICE = 'price',
  RATING = 'rating',
  SCORE = 'score',
}

enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

type Props = {
  setDestination: (destination: DestinationModel | null) => void;
  setDateRange: (dateRange: DateRange) => void;
};

interface Output {
  textSearch: string | string[] | null | undefined;
  items: CountryDestinationModel[];
  isLoading: boolean;
  dataComplete: boolean;
  sorting: Sorting;
  filter: Filter;
  isLoadingHeaderSearch: boolean;
  handleLoadMore: () => void;
  handleChangeSorting: (sorting: Sorting) => void;
  handleChangeFilter: (filter: Filter) => void;
}

const useSearch = (props: Props): Output => {
  const { setDestination, setDateRange } = props;

  const limit: number = 10;
  const textSearch = qs.parse(location?.search)?.name;

  const [data, setData] = useState<CountryDestinationModel[]>([]);
  const [items, setItems] = useState<CountryDestinationModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataComplete, setDataComplete] = useState<boolean>(false);
  const [sorting, setSorting] = useState<Sorting>({
    sortBy: 'recommend',
    sortDirection: 'asc',
  });
  const [filter, setFilter] = useState<Filter>({ priceRange: { from: 1 } });
  const [isLoadingHeaderSearch, setIsLoadingHeaderSearch] = useState<boolean>(
    true
  );

  useEffect(() => {
    const { name, startDate, endDate } = qs.parse(location.search);
    setDestination({
      name,
      type: 'country',
    } as DestinationModel);
    setDateRange({
      start: new Date(startDate as string),
      end: new Date(endDate as string),
    } as DateRange);
    setIsLoadingHeaderSearch(false);
    searchCountryDestination(1);
  }, []);

  const searchCountryDestination = async (page: number): Promise<void> => {
    setIsLoading(true);
    const { name, startDate, endDate } = qs.parse(location.search);
    const dateFrom = new Date(startDate as string);
    const dateTo = new Date(endDate as string);
    const [
      activities,
      totalItems,
    ] = await PackageManager.default.searchCountryDestination({
      text: name,
      dateFrom,
      dateTo,
      priceFrom: filter.priceRange.from,
      priceTo: filter.priceRange.to,
      page,
      limit,
    } as SearchCountryDestinationParams);
    const newItems = [...items, ...activities];
    setCurrentPage(page);
    setData(newItems);
    setItems(newItems);
    if (newItems.length === totalItems) setDataComplete(true);
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    searchCountryDestination(currentPage + 1);
  };

  const handleChangeSorting = (newSorting: Sorting) => {
    if (!_.isEqual(newSorting, sorting)) {
      if (newSorting.sortBy === SortBy.RECOMMEND) setItems(data);
      else if (newSorting.sortBy === SortBy.PRICE) {
        const itemsSorting = _.orderBy(
          data,
          (item: CountryDestinationModel) => {
            const price = _.find(item.amountsFrom, { paxType: 'ADULT' })
              ?.amount;
            return price;
          },
          [sorting.sortDirection]
        );
        setItems(itemsSorting);
      } else if (newSorting.sortBy === SortBy.RATING) setItems(data);
      else if (newSorting.sortBy === SortBy.SCORE) setItems(data);
      setSorting(newSorting);
    }
  };

  const handleChangeFilter = async (filter: Filter) => {
    await setFilter(filter);
    setItems([]);
    setData([]);
    searchCountryDestination(1);
  };

  return {
    textSearch,
    items,
    isLoading,
    dataComplete,
    sorting,
    filter,
    isLoadingHeaderSearch,
    handleLoadMore,
    handleChangeSorting,
    handleChangeFilter,
  };
};

export default useSearch;
