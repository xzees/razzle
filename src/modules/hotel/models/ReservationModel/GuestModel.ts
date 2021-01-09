import BedroomModel from './BedroomModel';
import InputInterface from './InputInterface';

class GuestModel{
    public guestName: InputInterface;
    public guestEmail: InputInterface;
    public guests: InputInterface;
    public bedrooms:BedroomModel[];

    constructor(guest: GuestModel) {
        this.guestName = guest.guestName;
        this.guestEmail = guest.guestEmail;
        this.guests = guest.guests;
        this.bedrooms = guest.bedrooms;

    }
}
export default GuestModel;