class GetOrderModel{
    public orderRef: string;
    public status: number;;

    constructor(param: GetOrderModel) {
        this.orderRef = param.orderRef;
        this.status = param.status;
    }
}
export default GetOrderModel;