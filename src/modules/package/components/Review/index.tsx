import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import ScoreLine from './ScoreLine';
import ScoreSummary from './ScoreSummary';
import DropDown from './DropDown';
import Item from './Item';
import {
  Pagination,
  ReviewWrapper,
  DropdownWrapper,
  ItemWrapper,
  PaginationWrapper,
} from './Style';

type Props = {
  isMobile: boolean;
};

const Review: FunctionComponent<Props> = ({ isMobile }) => {
  const itemsOne = [
    { title: 'ทดสอบ1', score: 72, displayScore: '7.2' },
    { title: 'ทดสอบ2', score: 70, displayScore: '7.0' },
    { title: 'ทดสอบ3', score: 86, displayScore: '8.6' },
    { title: 'ทดสอบ4', score: 75, displayScore: '7.5' },
    { title: 'ทดสอบ5', score: 80, displayScore: '8.0' },
  ];

  const itemsTwo = [
    { title: 'ดีเยี่ยม', score: 80, displayScore: '11' },
    { title: 'ดีมาก', score: 45, displayScore: '5' },
    { title: 'ดี', score: 20, displayScore: '2' },
    { title: 'พอใช้', score: 7, displayScore: '1' },
    { title: 'ปรับปรุง', score: 0, displayScore: '0' },
  ];

  const itemsSorting = [
    { label: 'รีวิวล่าสุด', value: 1 },
    { label: 'คะแนนมากที่สุด', value: 2 },
    { label: 'คะแนนน้อยที่สุด', value: 3 },
  ];

  const itemsType = [{ label: 'ทุกประเภท', value: 1 }];

  const reviews = [
    {
      reviewer: 'KANOM',
      photo:
        'https://image.shutterstock.com/image-photo/cheerful-beautiful-asian-woman-yellow-260nw-1715611435.jpg',
      country:
        'https://image.shutterstock.com/image-vector/thailand-flag-official-colors-proportion-600w-415109428.jpg',
      date: '10 ต.ค. 2563',
      score: 8.8,
      activityType: 'Activity type one',
      title: 'ประทับใจมากๆ',
      message:
        'ครอบครัวของเรานั่งรถไฟเที่ยวกันหลายเมือง แล้วก็ต้องขนกระเป๋าเดินทางไปด้วย โลเคชั่นของโรงแรมนี้ดีมาก ช่วยทุ่นแรงเราได้เยอะเลยค่ะแถมจองกับไทยทราเวลเซ็นเตอร์ก็ได้ราคาดีมาก',
      replies: [],
    },

    {
      reviewer: 'TAKESHI',
      photo:
        'https://image.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg',
      country:
        'https://image.shutterstock.com/image-vector/thailand-flag-official-colors-proportion-600w-415109428.jpg',
      date: '9 ก.ย. 2563',
      score: 7.2,
      activityType: 'Activity type two',
      title: 'NO! NO! NO!',
      message:
        'If you are thinking to book this hostel for your trip in Tokyo, I will advise you that NO, NO, NO! Very basic facilities provided, only ONE towel on our check-in. You will have to pay for more towels and changing the bed sheets even you stay for more than 3 days. I was wearing 2 right-side slippers up and down as they are no more choice during my stay. I booked this hostel as they get good reviews here in Agoda on the cleanliness and their location. But I will have to say; most of hostels or Hotels in Japan are clean as this is the basic standard requirement. I am totally regretted to stay in Hostel EAST57 Asakusabashi. Do consider twice if you haven’t clicked the reserve button, you definitely can get better options at the same location.',
      replies: [
        {
          replyer: 'JR KYUSHU AYAME',
          date: '10 ก.ย. 2563',
          message:
            'Hello. Thank you for your staying. We improved our attitudes, and everything now. If you have a chance, please come here again. Thank you.',
        },
      ],
    },
  ];

  if (isMobile) {
    return (
      <ReviewWrapper>
        <ScoreSummary isMobile />
        <ScoreLine items={itemsOne} mb={isMobile ? '40px' : '11px'} />
        <ScoreLine items={itemsTwo} {...(isMobile ? {} : { mb: '11px' })} />
        <DropdownWrapper>
          <DropDown
            value={1}
            label="จัดเรียงตาม"
            items={itemsSorting}
            type="sorting"
          />
          <DropDown
            value={1}
            label="ประเภทกิจกรรม"
            items={itemsType}
            type="filter"
          />
        </DropdownWrapper>
        <ItemWrapper>
          {_.map(reviews, (item: any) => {
            return <Item isMobile item={item} />;
          })}
        </ItemWrapper>
        <PaginationWrapper justifyContent="center">
          <Pagination
            count={8}
            page={1}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
          />
        </PaginationWrapper>
      </ReviewWrapper>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ScoreLine items={itemsOne} />
      </Grid>
      <Grid item xs={4}>
        <ScoreSummary isMobile={false} />
      </Grid>
      <Grid item xs={4}>
        <ScoreLine items={itemsTwo} />
      </Grid>
      <Grid item xs={3}>
        <DropDown
          value={1}
          label="จัดเรียงตาม"
          items={itemsSorting}
          type="sorting"
        />
      </Grid>
      <Grid item xs={3}>
        <DropDown
          value={1}
          label="ประเภทกิจกรรม"
          items={itemsType}
          type="filter"
        />
      </Grid>
      <Grid item xs={6}>
        <PaginationWrapper justifyContent="flex-end">
          <Pagination
            count={8}
            page={1}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
          />
        </PaginationWrapper>
      </Grid>
      <Grid item xs={12}>
        {_.map(reviews, (item: any) => {
          return <Item isMobile={false} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Review;
