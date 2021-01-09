import _ from 'lodash';
import NearByLocationModelInterface from 'modules/hotel/models/NearByLocationModel/NearByLocationModelInterface';
import NearByLocationInside from 'modules/hotel/models/NearByLocationInside';

export default abstract class NearByLocationModelAbstract implements NearByLocationModelInterface {

    public airport: NearByLocationInside;
    public natural: NearByLocationInside;
    public nearby:  NearByLocationInside;
    public restuarantCafe: NearByLocationInside;
    public supermarket: NearByLocationInside;
    public transmit: NearByLocationInside;

    constructor(json: any) {
        this.airport = (_.get(json, 'airport') || []).map((v: any) => new NearByLocationInside(v));
        this.natural = (_.get(json, 'natural') || []).map((v: any) => new NearByLocationInside(v));
        this.nearby = (_.get(json, 'nearby') || []).map((v: any) => new NearByLocationInside(v));
        this.restuarantCafe = (_.get(json, 'restuarant_cafe') || []).map((v: any) => new NearByLocationInside(v));
        this.supermarket = (_.get(json, 'supermarket') || []).map((v: any) => new NearByLocationInside(v));
        this.transmit = (_.get(json, 'transmit') || []).map((v: any) => new NearByLocationInside(v));
    }
}