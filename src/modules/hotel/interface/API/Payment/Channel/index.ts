export default interface PaymentChannelAPIInterface {
    secure_code: string;
    page_lang: string;
    multi_amount: boolean;
    order_code: string;
    success_url: string;
    fail_url: string;
    info: {
        amount: number
    }
}