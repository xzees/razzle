import _ from "lodash";

class SEOModel {
  title: string;
  keyword: string;
  description: string;
  abstract: string;
  dcAbstract: string;

  constructor(json: any) {
    this.title = _.get(json, "title");
    this.keyword = _.get(json, "keyword");
    this.description = _.get(json, "description");
    this.abstract = _.get(json, "abstract");
    this.dcAbstract = _.get(json, "dcAbstract");
  }
}

export default SEOModel;
