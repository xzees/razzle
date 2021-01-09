
class RoomReservationModel{
    public blockId: string;
    public amount: number;
    public startDate: string | null;
    public endDate: string | null;
    public adult: number;
    public room: number;
    public child: number;
    public childOld: string;

    constructor(room: RoomReservationModel) {
        this.blockId = room.blockId;
        this.amount = room.amount;
        this.startDate = room.startDate;
        this.endDate = room.endDate;
        this.adult = room.adult;
        this.room = room.room;
        this.child = room.child;
        this.childOld = room.childOld;
    }
}
export default RoomReservationModel;