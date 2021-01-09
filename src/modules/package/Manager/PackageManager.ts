import _ from 'lodash';
import { add, format } from 'date-fns';
import APIManager from 'common/Manager/APIManager';
import SearchCountryDestinationAPIRequest from '../APIRequests/SearchCountryDestinationAPIRequest';
import SearchDestinationAPIRequest from '../APIRequests/SearchDestinationAPIRequest';
import FilterActivityDetailAPIRequest from '../APIRequests/FilterActivityDetailAPIRequest';
import PreconfirmBookingAPIRequest from '../APIRequests/PreconfirmBookingAPIRequeset';
import ModalityModel from '../Models/GetModel/Detail/ModalityModel';
import DestinationModel from '../Models/GetModel/Destination/DestinationModel';
import CountryDestinationModel from '../Models/GetModel/CountryDestination/CountryDestinationModel';
import ActivityModel from '../Models/GetModel/Detail/ActivityModel';

export interface SearchCountryDestinationParams {
  text: string;
  dateFrom: Date;
  dateTo: Date;
  priceFrom?: number;
  priceTo?: number;
  page?: number;
  limit?: number;
}

export interface FilterDetailParams {
  activityCode: string;
  dateFrom: Date;
  dateTo: Date;
}

class PackageManager {
  public static default: PackageManager = new PackageManager();

  private constructor() {}

  public searchDestination = async (
    lang: string,
    destination: string
  ): Promise<DestinationModel[]> => {
    const apiRequest = new SearchDestinationAPIRequest(lang, destination);
    const data = await APIManager.default.fetch(apiRequest);
    const result = _.get(data, 'data.data.result', []) as DestinationModel[];
    return result;
  };

  public searchCountryDestination = async ({
    text,
    dateFrom,
    dateTo,
    ...rest
  }: SearchCountryDestinationParams): Promise<
    [CountryDestinationModel[], number]
  > => {
    const { priceFrom, priceTo, limit, page } = rest;

    const searchFilterItems = [{ type: 'text', value: text }];
    if (priceFrom)
      searchFilterItems.push({
        type: 'priceFrom',
        value: priceFrom.toString(),
      });
    if (priceTo)
      searchFilterItems.push({
        type: 'priceTo',
        value: priceTo.toString(),
      });

    const body = {
      filters: [
        {
          searchFilterItems,
        },
      ],
      from: format(dateFrom, 'yyyy-MM-dd'),
      to: format(dateTo, 'yyyy-MM-dd'),
      language: 'th',
      pagination: {
        itemsPerPage: limit || 10,
        page: page || 1,
      },
      order: 'PRICE',
    };
    console.log(body);
    const apiRequest = new SearchCountryDestinationAPIRequest(body);
    const data = await APIManager.default.fetch(apiRequest);
    const activities = _.get(
      data,
      'data.data.activities',
      []
    ) as CountryDestinationModel[];
    const totalItems = _.get(data, 'data.data.pagination.totalItems', 0);
    return [activities, totalItems];
  };

  public filterActivityDetail = async ({
    activityCode,
    dateFrom,
    dateTo,
  }: FilterDetailParams): Promise<ActivityModel> => {
    const body = {
      code: activityCode,
      from: format(dateFrom, 'yyyy-MM-dd'),
      to: format(dateTo, 'yyyy-MM-dd'),
      language: 'th',
      paxes: [{ age: 30 }],
    };

    const apiRequest = new FilterActivityDetailAPIRequest(body, 'full');
    const data = await APIManager.default.fetch(apiRequest);
    const activityDetail = new ActivityModel(_.get(data, 'data.data.activity'));
    return activityDetail;
  };

  public filterModalityDetail = async ({
    activityCode,
    dateFrom,
    dateTo,
  }: FilterDetailParams): Promise<ModalityModel | null> => {
    const body = {
      code: activityCode,
      from: format(dateFrom, 'yyyy-MM-dd'),
      to: format(dateTo, 'yyyy-MM-dd'),
      language: 'th',
      paxes: [{ age: 30 }],
    };
    const apiRequest = new FilterActivityDetailAPIRequest(body);
    const data = await APIManager.default.fetch(apiRequest);
    const modality = new ModalityModel(_.get(data, 'data.data.activity'));
    return modality;
  };

  public checkout = async (modality: ModalityModel) => {
    const dateFrom = new Date();
    const dateTo = add(dateFrom, { days: 60 });
    const body = {
      clientReference: 'MR AA BB',
      holder: {
        address: 'sss',
        age: 12,
        country: 'AF',
        email: 'aa@hotmail.com',
        mailing: false,
        name: 'AA',
        surname: 'BB',
        title: 'MR',
        telephones: ['0123456789'],
        zipCode: '56879',
      },
      language: 'th',
      activities: [
        {
          rateKey: _.get(
            modality,
            'modalities.0.rates.0.rateDetails.0.rateKey'
          ),
          from: '2020-05-27',
          to: '2020-05-28',
          paxes: [
            {
              age: 30,
              name: 'MR BB',
              surname: 'BB',
              type: 'ADULT',
            },
          ],
          answers: [
            {
              answer: '023214567',
              question: {
                code: 'PHONENUMBER',
                required: true,
                text:
                  'กรุณาระบุหมายเลขที่ติดต่อได้ของผู้เดินทางในกรณีฉุกเฉิน (รวมไปถึงรหัสประเทศ)',
              },
            },
          ],
        },
      ],
    };
    console.log(body);
    const apiRequest = new PreconfirmBookingAPIRequest(body);
    const data = await APIManager.default.fetch(apiRequest);
    console.log(data);
  };

  public fetchMeta = () => {
    return {
      title:
        'จองกิจกรรม กับThaitravelcenter.com จองกิจกรรมทั่วโลก กับ แอป Thaitravelcenter.com',
      metadata: [
        {
          name: 'keywords',
          content:
            'จองกิจกรรม กับThaitravelcenter.com จองกิจกรรมทั่วโลก กับ แอป Thaitravelcenter.com',
        },
        {
          name: 'description',
          content:
            'จองกิจกรรม กับThaitravelcenter.com จองกิจกรรมทั่วโลก กับ แอป Thaitravelcenter.com',
        },
      ],
    };
  };
}

export default PackageManager;
