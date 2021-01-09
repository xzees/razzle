import InitializeManager from "common/Manager/InitializeManager";
import _ from "lodash";
import { observable, computed, reaction, action } from "mobx";
import BlockModel from "modules/hotel/models/BlockModel";
import HotelListModelInterface from "modules/hotel/interface/Models/HotelListModelInterface";
import HotelListModel from "modules/hotel/models/HotelListModel";
import RoomlistModel from "modules/hotel/models/RoomlistModel";
import HotelRootStore from "modules/hotel/Stores/HotelRootStore";
import ReservationModel from "modules/hotel/models/ReservationModel";
import ReservationHotelModel from "modules/hotel/models/ReservationModel/ReservationHotelModel";
import RoomReservationModel from "modules/hotel/models/ReservationModel/RoomReservationModel";
import BookingModel from "modules/hotel/models/ReservationModel/BookingModel";
import GuestModel from "modules/hotel/models/ReservationModel/GuestModel";
import ReservBlockModel from "modules/hotel/models/ReservationModel/BlockModel";
import { ValidateType } from "modules/hotel/models/ReservationModel/InputInterface";

const guestNameModel = {
  value: "",
  validate: {
    validateType: ValidateType.Name,
    isRequire: true,
    maxLength: 20,
    isValidate: false,
    requireMessage: "กรุณากรอกชื่อ-นามสกุลผู้เข้าพัก (จำเป็น)",
    errorMessage: "รูปแบบชื่อ-นามสกุลผู้เข้าพักไม่ถูกต้อง",
  },
};

const guestEmailModel = {
  value: "",
  validate: {
    validateType: ValidateType.Email,
    isRequire: false,
    maxLength: 60,
    isValidate: true,
    requireMessage: "",
    errorMessage: "รูปแบบอีเมลไม่ถูกต้อง",
  },
};
const guestsModel = {
  value: 1,
  validate: {
    validateType: ValidateType.Numbers,
    isRequire: true,
    maxLength: 2,
    isValidate: true,
    requireMessage: "กรุณาเลือกจำนวนผู้เข้าพัก (จำเป็น)",
    errorMessage: "เลือกจำนวนผู้เข้าพักไม่ถูกต้อง",
  },
};

class ReservationStore {
  public hotelrootstore: HotelRootStore;
  // @observable public reservation: ReservationModel[] = observable<any>([]);
  @observable public hotels: ReservationHotelModel[] = observable<any>([]);

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore;
  }

  @action.bound
  public setReservation(value: ReservationHotelModel[]) {
    this.hotels = value;
    //   console.log("🚀 ~ file: ReservationStore.ts ~ line 23 ~ ReservationStore ~ setReservation ~ this.reservation", this.reservation)
  }

  @action.bound
  public clearHotelReservation() {
    this.hotels = [];
  }

  @action.bound
  public onReservationClick(amountRoomSelect: number, blockId: string) {
    const searchParam = this.hotelrootstore.paramForApiSearch();
    if (amountRoomSelect > 0) {
      const hotelData = this.hotelrootstore.RoomlistStore.data;

      if (this.hotels.length > 0) {
        let newReservation: ReservationHotelModel[] = [];
        let isHotelUpdate = false;
        newReservation = this.hotels.map(
          (hotel: ReservationHotelModel) => {
            if (
              hotel.hotelData &&
              hotelData.hotelId == hotel.hotelData.hotelId
            ) {
              let isRoomUpdate = false;

              hotel.roomReservation.map((room) => {
                //block update
                if (room.blockId == blockId) {
                  room.amount = amountRoomSelect;
                  isRoomUpdate = true;
                }
                return room;
              });

              //block add in reservation
              if (!isRoomUpdate) {
                hotel.roomReservation.push({
                  blockId: blockId,
                  amount: amountRoomSelect,
                  ...searchParam,
                });
              }
              hotel.booking = this.getBookingData(amountRoomSelect, blockId);
              isHotelUpdate = true;
            }
            return hotel;
          }
        );

        //block add in new reservation
        if (!isHotelUpdate) {
          // Clear Reservation when choose new hotel
          newReservation = [];
          newReservation.push({
            hotelData: hotelData,
            roomReservation: [
              {
                blockId: blockId,
                amount: amountRoomSelect,
                ...searchParam,
              },
            ],
            booking: this.getBookingData(amountRoomSelect, blockId),
            payment: {
              success: false,
              orderRef: "",
              msgPayment: "",
              channel: {
                fee: 0,
                amount: 0,
                form_url: "",
                icon: "",
                secureKey: "",
                channel: "",
              },
            },
          });
        }
        this.setReservation(newReservation);
      } else {
        //start new reservation
        this.setReservation([
          {
            hotelData: hotelData,
            roomReservation: [
              {
                blockId: blockId,
                amount: amountRoomSelect,
                ...searchParam,
              },
            ],
            booking: this.getBookingData(amountRoomSelect, blockId),
            payment: {
              success: false,
              orderRef: "",
              msgPayment: "",
              channel: {
                fee: 0,
                amount: 0,
                form_url: "",
                icon: "",
                secureKey: "",
                channel: "",
              },
            },
          },
        ]);
      }
    } else {
      //remove reservation
      const newReservation: ReservationHotelModel[] = this.hotels.map(
        (hotel: ReservationHotelModel) => {
          hotel.roomReservation = _.filter(
            hotel.roomReservation,
            function (room) {
              return room.blockId != blockId;
            }
          );
          return hotel;
        }
      );
      this.setReservation(newReservation);
    }
  }

  private getBookingData(amountRoomSelect: number, blockId: string) {
    let blocks: ReservBlockModel[] = [];
    const guests: GuestModel[] = [];
    const roomListHotelData = this.hotelrootstore.RoomlistStore.data;
    // console.log("🚀 ~ file: ReservationStore.ts ~ line 178 ~ ReservationStore ~ getBookingData ~ roomListHotelData", roomListHotelData)
    const flatBlock = _.flatten(roomListHotelData.block);
    let isHasBlock = false;
    // add guest data
    if (this.hotels.length > 0) {
      this.hotels.map((reservation) => {
        // console.log("🚀 ~ file: ReservationStore.ts ~ line 184 ~ ReservationStore ~ this.hotels.map ~ reservation", reservation)
        if (reservation.booking.blocks.length > 0) {
          // blocks = reservation.booking.blocks;
          const currentBlock = _.find(reservation.booking.blocks, [
            "blockId",
            blockId,
          ]);

          reservation.booking.blocks.map((loopBlock) => {
            if (loopBlock.blockId == blockId) {
              const blockData = _.find(flatBlock, ["blockId", blockId]);
              if (blockData) {
                const bedroomData = _.range(
                  blockData.roomInfo.bedroomCount
                ).map((bc) => {
                  // console.log("Has Block", blockData?.roomInfo.bedrooms[bc]);

                  const configurationId =
                    blockData?.roomInfo.bedrooms[bc].bedConfigurations[0]
                      .bedTypes[0].configurationId;
                  return { bedTypeConfigurationId: configurationId };
                });

                // console.log(
                //   "🚀 ~ file: ReservationStore.ts ~ line 146 ~ ReservationStore ~ bedroomData ~ bedroomData",
                //   bedroomData
                // );

                _.range(amountRoomSelect).map(() => {
                  guests.push({
                    guestName: guestNameModel,
                    guestEmail: guestEmailModel,
                    guests: guestsModel,
                    bedrooms: bedroomData,
                  });
                });

                // console.log("guests", guests);
                loopBlock.guests = guests;
                // blocks = [...reservation.booking.blocks, currentBlock]
                blocks.push(loopBlock);
                //blocks.push(currentBlock);

                isHasBlock = true;
              }
            } else {
              blocks.push(loopBlock);
            }
          });
        }
      });
    }

    if (!isHasBlock) {
      const flatBlock = _.flatten(roomListHotelData.block);
      flatBlock.map((block) => {
        if (block.blockId == blockId) {
          const incrementPriceId =
            block.incrementalPrice[amountRoomSelect - 1].incrementalPriceId;
          const bedroomData = _.range(block.roomInfo.bedroomCount).map((bc) => {
            // console.log("Not Has Block", block?.roomInfo.bedrooms[bc]);

            const configurationId =
              block?.roomInfo.bedrooms[bc].bedConfigurations[0].bedTypes[0]
                .configurationId;
            return { bedTypeConfigurationId: configurationId };
          });
          _.range(amountRoomSelect).map(() => {
            guests.push({
              guestName: guestNameModel,
              guestEmail: guestEmailModel,
              guests: guestsModel,
              bedrooms: bedroomData,
            });
          });

          blocks.push({
            blockId: blockId,
            incrementPriceId: incrementPriceId,
            guests: guests,
          });
        }
      });
    }

    const bookingData: BookingModel = {
      hotelId: roomListHotelData.hotelId,
      checkin: roomListHotelData.checkin,
      checkout: roomListHotelData.checkout,
      adult: this.hotelrootstore.vAdult,
      child: this.hotelrootstore.vChild,
      booker: {
        firstname: {
          value: "",
          validate: {
            validateType: ValidateType.Name,
            isRequire: true,
            maxLength: 20,
            isValidate: false,
            requireMessage: "กรุณากรอกชื่อผู้จอง (จำเป็น)",
            errorMessage: "รูปแบบชื่อไม่ถูกต้อง",
          },
        },
        lastname: {
          value: "",
          validate: {
            validateType: ValidateType.Name,
            isRequire: true,
            maxLength: 30,
            isValidate: false,
            requireMessage: "กรุณากรอกนามสกุลผู้จอง (จำเป็น)",
            errorMessage: "รูปแบบนามสกุลไม่ถูกต้อง",
          },
        },
        email: {
          value: "",
          validate: {
            validateType: ValidateType.Email,
            isRequire: true,
            maxLength: 50,
            isValidate: false,
            requireMessage: "กรุณากรอกอีเมลผู้จอง (จำเป็น)",
            errorMessage: "รูปแบบอีเมลไม่ถูกต้อง",
          },
        },
        phone: {
          value: "",
          validate: {
            validateType: ValidateType.Phone,
            isRequire: true,
            maxLength: 15,
            isValidate: false,
            requireMessage: "กรุณากรอกเบอร์โทรติดต่อผู้จอง (จำเป็น)",
            errorMessage: "รูปแบบเบอร์โทรศัพท์ติดต่อไม่ถูกต้อง",
          },
        },
        traveller: {
          value: "leisure",
          validate: {
            validateType: ValidateType.Name,
            isRequire: true,
            maxLength: 10,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
        stayer: {
          value: true,
          validate: {
            validateType: ValidateType.Boolean,
            isRequire: true,
            maxLength: 0,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
      },
      blocks: blocks,
      addition: {
        remark: {
          value: "",
          validate: {
            validateType: ValidateType.CharactersAndNumbers,
            isRequire: false,
            maxLength: 255,
            isValidate: true,
            requireMessage: "",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
        sameAreaRooms: {
          value: false,
          validate: {
            validateType: ValidateType.Boolean,
            isRequire: true,
            maxLength: 0,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
        quietRoom: {
          value: false,
          validate: {
            validateType: ValidateType.Boolean,
            isRequire: true,
            maxLength: 0,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
        freeParking: {
          value: false,
          validate: {
            validateType: ValidateType.Boolean,
            isRequire: true,
            maxLength: 0,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
        checkinEtaHour: {
          value: 24,
          validate: {
            validateType: ValidateType.Numbers,
            isRequire: true,
            maxLength: 2,
            isValidate: true,
            requireMessage: "กรุณาเลือก (จำเป็น)",
            errorMessage: "รูปแบบไม่ถูกต้อง",
          },
        },
      },
      payment: {
        success: false,
        orderRef: "",
        msgPayment: "",
        channel: {
          fee: 0,
          amount: 0,
          form_url: "",
          icon: "",
          secureKey: "",
          channel: "",
        },
      },
    };
    // console.log("bookingData", bookingData);

    return bookingData;
  }
}

export default ReservationStore;
