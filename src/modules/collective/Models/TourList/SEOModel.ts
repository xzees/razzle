import _ from "lodash";
import SEOModelData from "./SEOModelData";

class SEOModel {
  tourTitleTH: string;
  tourTitleEN: string;
  tourSeo: SEOModelData;

  constructor(json: any) {
    this.tourTitleTH = _.get(json, "tourTitleTH");
    this.tourTitleEN = _.get(json, "tourTitleEN");
    this.tourSeo = _.get(json, "tourSeo");
  }
}

export default SEOModel;
