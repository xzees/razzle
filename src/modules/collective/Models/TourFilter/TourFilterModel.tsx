import _ from "lodash";
import periodModel from "./periodModel";
import priceModel from "./priceModel";
import routeModel from "./routeModel";
import durationModel from "./durationModel";
import airlineModel from "./airlineModel";

class TourFilterModel {
  period: periodModel[];
  price: priceModel;
  route: routeModel[];
  duration: durationModel[];
  airline: airlineModel[];

  constructor(json: any) {
    this.period = _.get(json, "period");
    this.price = _.get(json, "price");
    this.route = _.get(json, "route");
    this.duration = _.get(json, "duration");
    this.airline = _.get(json, "airline");
  }
}

export default TourFilterModel;