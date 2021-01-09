//React
import React, { useState, useEffect } from 'react'
//Plugin
import { inject, observer } from 'mobx-react';
import { animateScroll } from 'react-scroll';
import _ from 'lodash';
//MUI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
//Model
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import GuestModel from 'modules/hotel/models/ReservationModel/GuestModel';
import RegularExpression from 'utilities/RegularExpression';
import PaymentChannelModel from 'modules/hotel/models/ReservationModel/PaymentChannelModel';
import OrderModel from 'modules/hotel/models/ReservationModel/OrderModel';
import PaymentModel from 'modules/hotel/models/ReservationModel/PaymentModel';
//Compoments
import FormBlock from 'modules/hotel/component/ReservationForm/Block';
import Payment from 'modules/hotel/component/ReservationForm/Payment';
import Addition from 'modules/hotel/component/ReservationForm/Addition';
import Booker from 'modules/hotel/component/ReservationForm/Booker';
import ReviewButton from 'modules/hotel/component/ReservationForm/Button/ReviewButton';
import EditButton from 'modules/hotel/component/ReservationForm/Button/EditButton';
import ConfirmButton from 'modules/hotel/component/ReservationForm/Button/ConfirmButton';
//Interface
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import InputInterface, { ValidateType } from "modules/hotel/models/ReservationModel/InputInterface";
import PaymentChannelAPIInterface from 'modules/hotel/interface/API/Payment/Channel';
//Manager
import HotelManager from 'modules/hotel/Manager/HotelManager';
import NavigationManager from 'common/Manager/NavigationManager';
import APIConfig from 'common/Config/APIConfig';
import ColorManager from 'common/Manager/ColorManager';
//Style
import { useStyles } from 'modules/hotel/component/ReservationForm/Style';


const ReservationForm = inject('stores')(
    observer((props: RoomListInterface) => {
        const classes = useStyles();
        const validation = RegularExpression.default;
        const hotelReservationStore = props.stores!.HotelRootStore.ReservationStore.hotels;
        const booking = hotelReservationStore[0]?.booking;
        const payment = hotelReservationStore[0]?.payment;

        const [bookingFormState, setBookingFormState] = useState<BookingModel>(booking);
        const [formValidate, setFormValidate] = useState<any[]>([]);
        const [isConfirmMode, setIsConfirmMode] = useState<boolean>(false);
        const [paymentChannel, setPaymentChannel] = useState<PaymentChannelModel[]>([]);

        const updateGuest = (blockId: String, index: number, guestData: GuestModel) => {
            guestData.guestName = validateData(guestData.guestName);
            guestData.guestEmail = validateData(guestData.guestEmail);
            const block = _.find(bookingFormState.blocks, ['blockId', blockId]);
            if (block) {
                const guestUpdate = block.guests[index] = guestData;
                setBookingFormState({ ...bookingFormState, ...guestUpdate });
            }
        }

        const updatePayment = (paymentData: PaymentModel) => {
            setBookingFormState({ ...bookingFormState, payment: paymentData });
        }

        const inputValidateError = (input: InputInterface) => {
            if (input.validate && !isConfirmMode) {
                return !input.validate.isValidate;
            } else {
                return false;
            }
        }

        const inputValidateIcon = (input: InputInterface) => {
            if (input.validate && !isConfirmMode) {
                return (input.validate.isValidate)
                    ? <CheckCircleOutlinedIcon style={{ color: ColorManager.default.primaryColor }} />
                    : <CancelOutlinedIcon style={{ color: ColorManager.default.redColor }} />
            } else {
                return <></>;
            }
        }

        const validateData = (input: InputInterface) => {
            let isValidate = false;
            if (input.validate && !isConfirmMode) {
                if (input.validate.validateType == ValidateType.Name) {
                    isValidate = validation.NameValidate(String(input.value), !input.validate.isRequire);
                } else if (input.validate.validateType == ValidateType.Email) {
                    isValidate = validation.emailValidate(String(input.value), !input.validate.isRequire);
                } else if (input.validate.validateType == ValidateType.Phone) {
                    isValidate = validation.phoneNumberValidate(String(input.value), !input.validate.isRequire);
                }
            }
            return { value: input.value, validate: { ...input.validate, isValidate } }
        }

        useEffect(() => {
            if (payment) {
                if (payment.orderRef) {
                    setIsConfirmMode(true);
                }
            }
        }, [payment])

        useEffect(() => {
            const validateData = [];
            const bookerValidate = (_.findKey(bookingFormState.booker, ['validate.isValidate', false])) ? { validate: false } : { validate: true };
            validateData.push(bookerValidate);
            bookingFormState.blocks.map((block) => {
                block.guests.map((guest) => {
                    const validate = (_.findKey(guest, ['validate.isValidate', false])) ? { validate: false } : { validate: true };
                    validateData.push(validate);
                })
            });
            setFormValidate(validateData);
        }, [bookingFormState.booker, JSON.stringify(bookingFormState.blocks)])

        const getOrder = async (): Promise<OrderModel> => {
            return await HotelManager.default.reservationOrder(bookingFormState);
        }

        const getPaymentChannel = async (param: PaymentChannelAPIInterface): Promise<PaymentChannelModel[]> => {
            const paymentChannelData = await HotelManager.default.paymentChannel(param);
            return paymentChannelData;
        }

        const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isConfirmMode) {
                getOrder().then((orderRes) => {
                    if (orderRes.success) {
                        //setOrderData(orderRes);
                        getPaymentChannel(
                            {
                                "secure_code": "92b9966a-676a-4da1-bbca-f5044a7e65b9",
                                "page_lang": "th",
                                "multi_amount": false,
                                "order_code": orderRes.orderRef,
                                "success_url": APIConfig.frontend + NavigationManager.ROUTES.HOTEL_RESERVATION + '?orderRef=' + orderRes.orderRef + '&status=00',
                                "fail_url": APIConfig.frontend + NavigationManager.ROUTES.HOTEL_RESERVATION + '?orderRef=' + orderRes.orderRef + '&status=01',
                                "info": {
                                    "amount": orderRes.totalPrice
                                }
                            }
                        ).then((pcRes) => {
                            // console.log("🚀 ~ file: ReservationForm.tsx ~ line 236 ~ ).then ~ pcRes", pcRes)
                            if (pcRes.length > 0) {
                                setPaymentChannel(pcRes);
                            }
                        })
                    }
                })
            } else {
                if (!_.find(formValidate, ['validate', false])) {
                    setIsConfirmMode(true);
                    animateScroll.scrollToTop();
                }
                else {
                    // console.log('validate false');
                }
            }
        }

        useEffect(() => {
            if (paymentChannel.length > 0) {
                updatePayment({ success: payment.success, orderRef: payment.orderRef, msgPayment: payment.msgPayment, channel: paymentChannel[0] });
            }
        }, [paymentChannel])

        const renderMessage = (input: InputInterface) => {
            if (input.validate && !input.validate.isValidate) {
                if (input.validate.isRequire && input.value == "") {
                    return <>{input.validate.requireMessage}</>;
                } else {
                    return <>{input.validate.errorMessage}</>;
                }
            } else {
                return <></>;
            }
        }

        return (
            <>
                <form noValidate autoComplete="off" className={classes.root} onSubmit={(e) => onFormSubmit(e)}>
                    <Box component="div">
                        <Booker bookingFormState={bookingFormState} setBookingFormState={setBookingFormState} inputValidateError={inputValidateError} inputValidateIcon={inputValidateIcon} renderMessage={renderMessage} isConfirmMode={isConfirmMode} validateData={validateData} />
                        {
                            hotelReservationStore.map((hotel) => {
                                return (<FormBlock hotel={hotel} isConfirmMode={isConfirmMode} bookingFormState={bookingFormState} setBookingFormState={setBookingFormState} inputValidateError={inputValidateError} inputValidateIcon={inputValidateIcon} renderMessage={renderMessage} updateGuest={updateGuest} />);
                            })
                        }
                        <Addition bookingFormState={bookingFormState} setBookingFormState={setBookingFormState} isConfirmMode={isConfirmMode} validateData={validateData} />
                        <Grid container spacing={2}>
                            <ReviewButton isConfirmMode={isConfirmMode} payment={payment} formValidate={formValidate} />

                            {(isConfirmMode && paymentChannel.length == 0 && !payment.success) &&
                                <>
                                    <EditButton setIsConfirmMode={setIsConfirmMode} payment={payment} formValidate={formValidate} />
                                    <ConfirmButton payment={payment} formValidate={formValidate} />
                                </>
                            }
                        </Grid>
                    </Box>
                </form>
                <Payment bookingFormState={bookingFormState} updatePayment={updatePayment} paymentChannel={paymentChannel} />
            </>
        );
    })
);

export default ReservationForm;