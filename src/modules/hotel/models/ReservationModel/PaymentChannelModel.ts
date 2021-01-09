
class PaymentChannelModel{
    public fee: number;
    public amount: number;
    public form_url: string;
    public icon: string;
    public secureKey: string;
    public channel: string;

    constructor(pc: PaymentChannelModel) {
        this.fee = pc.fee;
        this.amount = pc.amount;
        this.form_url = pc.form_url;
        this.icon = pc.icon;
        this.secureKey = pc.secureKey;
        this.channel = pc.channel;
    }
}

export default PaymentChannelModel;