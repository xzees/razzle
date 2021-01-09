import _ from 'lodash';

class index {

    public key: string;
    public translation: any;

    constructor(v: any) {

        this.key = _.get(v, 'key');
        this.translation = _.get(v, 'translation');
    }
}
export default index;