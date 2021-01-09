import _ from "lodash";
import countryModel from "./countryModel";
import airlineModel from "./airlineModel";
import periodsModel from "./periodsModel";
import informationModel from "./informationModel";
import galleriesModel from "./galleriesModel";
import remarksModel from "./remarksModel";
import discountModel from "../TourList/discountModel";

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
  mealAmount: number;
  periods: periodsModel;
  discount: discountModel;
  information: informationModel[];
  galleries: galleriesModel[];
  remarks: remarksModel;

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
    this.mealAmount = _.get(json, "mealAmount");
    this.periods = _.get(json, "periods");
    this.discount = _.get(json, "discount");
    this.information = _.get(json, "information");
    this.galleries = _.get(json, "galleries");
    this.remarks = _.get(json, "remarks");
  }
}

export default TourModel;
