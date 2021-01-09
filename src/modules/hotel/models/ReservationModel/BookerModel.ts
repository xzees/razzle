import InputInterface from './InputInterface';

class BookerModel{
    public firstname: InputInterface;
    public lastname: InputInterface;
    public email: InputInterface;
    public phone: InputInterface;
    public traveller: InputInterface;
    public stayer: InputInterface;

    constructor(booker: BookerModel) {
        this.firstname = booker.firstname;
        this.lastname = booker.lastname;
        this.email = booker.email;
        this.phone = booker.phone;
        this.traveller = booker.traveller;
        this.stayer = booker.stayer;

    }
}
export default BookerModel;