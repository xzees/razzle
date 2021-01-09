import _ from "lodash";
import SEOLangModel from "./SEOLangModel";

class SEOModel {
  th: SEOLangModel;
  en: SEOLangModel;

  constructor(json: any) {
    this.th = _.get(json, "th");
    this.en = _.get(json, "en");
  }
}

export default SEOModel;
