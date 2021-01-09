import React from 'react';
import styled from "styled-components";
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Grid from '@material-ui/core/Grid';
import MessageItem from "./item";
import _ from 'lodash';

interface IMessage {
    reviewer: string;
    photo: string;
    country: string;
    date: string;
    scroll: number;
    roomtype: string;
    title: string;
    message: string;
    reply: IReply[];
  }
  interface IReply {
    replyer: string;
    date: string;
    message: string;
  }

const styles = {

}
export default function message(props: any) {
    const { isMobile } = props; 
    const message:IMessage[] = [
        { 
            reviewer: 'KANOM',
            photo: 'https://image.shutterstock.com/image-photo/cheerful-beautiful-asian-woman-yellow-260nw-1715611435.jpg',
            country: 'https://image.shutterstock.com/image-vector/thailand-flag-official-colors-proportion-600w-415109428.jpg',
            date: '10 ต.ค. 2563',
            scroll: 8.8,
            roomtype: 'Family Room',
            title: 'ประทับใจมากๆ',
            message: 'ครอบครัวของเรานั่งรถไฟเที่ยวกันหลายเมือง แล้วก็ต้องขนกระเป๋าเดินทางไปด้วย โลเคชั่นของโรงแรมนี้ดีมาก ช่วยทุ่นแรงเราได้เยอะเลยค่ะแถมจองกับไทยทราเวลเซ็นเตอร์ก็ได้ราคาดีมาก',
            reply: [],
        },
        
        { 
            reviewer: 'TAKESHI',
            photo: 'https://image.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg',
            country: 'https://image.shutterstock.com/image-vector/thailand-flag-official-colors-proportion-600w-415109428.jpg',
            date: '9 ก.ย. 2563',
            scroll: 7.2,
            roomtype: 'Superior Twin Room',
            title: 'NO! NO! NO!',
            message: 'If you are thinking to book this hostel for your trip in Tokyo, I will advise you that NO, NO, NO! Very basic facilities provided, only ONE towel on our check-in. You will have to pay for more towels and changing the bed sheets even you stay for more than 3 days. I was wearing 2 right-side slippers up and down as they are no more choice during my stay. I booked this hostel as they get good reviews here in Agoda on the cleanliness and their location. But I will have to say; most of hostels or Hotels in Japan are clean as this is the basic standard requirement. I am totally regretted to stay in Hostel EAST57 Asakusabashi. Do consider twice if you haven’t clicked the reserve button, you definitely can get better options at the same location.',
            reply: [
                {
                    replyer: 'JR KYUSHU AYAME',
                    date: '10 ก.ย. 2563',
                    message: 'Hello. Thank you for your staying. We improved our attitudes, and everything now. If you have a chance, please come here again. Thank you.',
                }
            ],
        }
    ];

    return (
        <>
            {
                message.map((item, i) => { 
                    return (<MessageItem messageItem={item} isMobile={isMobile} key={i}/>) 
                })
            }
        </>
    );
}