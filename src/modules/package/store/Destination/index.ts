import { action, computed, observable } from 'mobx';
import { formatDateForApi } from 'common/Manager/Helper';
import NavigationManager from 'common/Manager/NavigationManager';
import DestinationModel from 'modules/package/Models/GetModel/Destination/DestinationModel';
import PackageStore from '..';

class DestinationStore {
  packageStore: PackageStore;

  @observable public destination: DestinationModel | null = null;
  @observable private startDate: Date | null = new Date();
  @observable private endDate: Date | null = new Date();

  constructor(PackageStore: PackageStore) {
    this.packageStore = PackageStore;
  }

  @action
  public setDestination = (payload: DestinationModel | null) => {
    this.destination = payload;
  };

  @action
  public setDateRange = (payload: DateRange) => {
    this.startDate = payload.start;
    this.endDate = payload.end;
  };

  @action
  public paramsForApiSearch = (): any => {
    const params = {
      name: this.destination?.name,
      type: this.destination?.type,
      startDate: this.startDate ? formatDateForApi(this.startDate) : null,
      endDate: this.endDate ? formatDateForApi(this.endDate) : null,
    };
    return this.destination?.type === 'activity'
      ? {
          ...params,
          code: this.destination.code,
          countryName: this.destination.countryName,
        }
      : params;
  };

  @action
  public searchDestination = (): void => {
    if (this.destination && this.startDate && this.endDate) {
      NavigationManager.redirectTo(
        this.destination.type === 'activity'
          ? `/package/activity/detail/${this.destination.code}`
          : `/package/search`,
        this.paramsForApiSearch()
      );
    }
  };

  @computed
  public get dateRange(): DateRange {
    return { start: this.startDate, end: this.endDate };
  }
}

export default DestinationStore;
