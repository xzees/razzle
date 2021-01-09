import _ from "lodash";
import countryModel from "modules/collective/Models/TourDetail/countryModel";
import airlineModel from "modules/collective/Models/TourDetail/airlineModel";
import periodsModel from "./periodsModel";
import discountModel from "./discountModel";

class TourModel {
  tourID: string;
  tourCode: string;
  title: string;
  coverImage: string;
  country: countryModel[];
  airline: airlineModel;
  numDay: number;
  numNight: number;
  rating: number;
  description: string;
  minPrice: number;
  periods: periodsModel[];
  discount: discountModel;

  constructor(json: any) {
    this.tourID = _.get(json, "tourID");
    this.tourCode = _.get(json, "tourCode");
    this.title = _.get(json, "title");
    this.coverImage = _.get(json, "coverImage");
    this.country = _.get(json, "country");
    this.airline = _.get(json, "airline");
    this.numDay = _.get(json, "numDay");
    this.numNight = _.get(json, "numNight");
    this.rating = _.get(json, "rating");
    this.description = _.get(json, "description");
    this.minPrice = _.get(json, "minPrice");
    this.periods = _.get(json, "periods");
    this.discount = _.get(json, "discount");
  }
}

export default TourModel;
