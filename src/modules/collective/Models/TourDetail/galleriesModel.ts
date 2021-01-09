import _ from "lodash";

class galleriesModel {
  order: number;
  image: string;

  constructor(json: any) {
    this.order = _.get(json, "order");
    this.image = _.get(json, "image");
  }
}
export default galleriesModel;
