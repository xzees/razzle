import InputInterface from './InputInterface';
class AdditionModel{
    public remark: InputInterface;
    public sameAreaRooms: InputInterface;
    public quietRoom: InputInterface;
    public freeParking: InputInterface;
    public checkinEtaHour: InputInterface;

    constructor(addition: AdditionModel) {
        this.remark = addition.remark;
        this.sameAreaRooms = addition.sameAreaRooms;
        this.quietRoom = addition.quietRoom;
        this.freeParking = addition.freeParking;
        this.checkinEtaHour = addition.checkinEtaHour;

    }
}
export default AdditionModel;