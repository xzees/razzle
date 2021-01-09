import _ from 'lodash';

class LanguagesModel {
    public code: string;
    public nameEn: string;

    constructor(json: any) {
        this.nameEn = _.get(json, 'name_en');
        this.code = _.get(json, 'code_639_2');
    }
}
export default LanguagesModel;
