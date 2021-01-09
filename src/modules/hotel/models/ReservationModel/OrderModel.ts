
class OrderModel{
    public success: boolean;
    public orderRef: string;
    public totalPrice: number;

    constructor(order: OrderModel) {
        this.success = order.success;
        this.orderRef = order.orderRef;
        this.totalPrice = order.totalPrice;
    }
}

export default OrderModel;