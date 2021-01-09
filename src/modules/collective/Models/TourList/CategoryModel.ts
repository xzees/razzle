import _ from "lodash";
import categoryDataModel from "./categoryDataModel";

class CategoryModel {
  categoryID: string;
  categoryNameTH: string;
  categoryNameEN: string;
  categoryData: categoryDataModel[];

  constructor(json: any) {
    this.categoryID = _.get(json, "categoryID");
    this.categoryNameTH = _.get(json, "categoryNameTH");
    this.categoryNameEN = _.get(json, "categoryNameEN");
    this.categoryData = _.get(json, "categoryData");
  }
}

export default CategoryModel;
