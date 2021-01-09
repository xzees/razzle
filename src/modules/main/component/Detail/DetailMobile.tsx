import React from "react";
import Container from "common/src/components/UI/Container";
import { Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";

import RootStore from "stores";
import Heading from 'common/src/components/Heading';

import Boxs from "@material-ui/core/Box";
import Text from "common/src/components/Text";

type Props = {
  stores?: RootStore;
}

const DetailMobile = inject("stores")(
  observer((props: Props) => {

  const themeStore = props.stores!.ThemeStore;

  return (
    <div style={{backgroundColor:'#d9deea'}}>
    <Container >
      <Boxs pt={6} pb={6}>
        <Grid  container  spacing={3} >
          <Grid item xs={12}>
            <Heading {...TextBannerh1} content="ทัวร์ญี่ปุ่น" />
          </Grid>
          <Grid item xs={12}>
            <Heading {...TextBannerh2} content="ทัวร์ญี่ปุ่น ราคาถูก โปรโมชั่นประหยัดกว่า" />
          </Grid>
          <Grid item xs={12}>
            <Heading {...TextBannerh3} content="ทัวร์ญี่ปุ่น โปรโมชั่นดีดี ทุกเส้นทาง Tokyo โอซาก้า ฮอกไกโด เซนได ชิราคาวาโกะมีให้เลือกมากสุดพร้อมบริการจัดทัวร์คุณภาพ  ทัวร์ญี่ปุ่น โปรโมชั่นดีดี ทุกเส้นทาง Tokyo โอซาก้า ฮอกไกโด เซนได ชิราคาวาโกะ" />
          </Grid>
          <Grid item xs={12}>
            <Text {...TextBannerh3Sarabun} content="ทัวร์ญี่ปุ่น โปรโมชั่นเที่ยวญี่ปุ่น ตลอดปี ครบทุกเดือน หลากหลายเส้นทางกับไทยทราเวลเซ็นเตอร์ สร้างและสรรค์บริการ ทัวร์ญี่ปุ่น และ เที่ยวญี่ปุ่น Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod Japan ดินแดนอาทิตย์อุทัย อาทิ โตเกียว โอซาก้า นาโงย่า ฟูกูโอกะ ฮอกไกโด ชิราคาวาโกะ เซนได และ เมืองท่องเที่ยวสําคัญอื่นในญี่ปุ่นอีกเพียบ หรือจะเลือกเดินทางเที่ยวช่วงเทศกาล ถ่ายรูปอินเทรนด์สวยๆ กับชุดยูกาตะในสถานที่ท่องเที่ยวทางวัฒนธรรมอันสวยงาม ได้ทั้ง ช่วงเทศกาลปีใหม่ ตรุษจีน สงกรานต์ วันหยุดสําคัญ เรายังเป็นบริษัททัวร์ รับจัดโปรแกรมเดิน ทางไปญี่ปุ่น หลากหลายเส้นทาง ตั้งแต่ 2 ท่าน จนถึง 2,000 ท่านขึ้นไปในรูปแบบแพคเกจทัวร์ หรือการเดินทางแบบหมู่คณะ กรุ๊ปทัวร์ กรุ๊ปเหมา ท่องเที่ยว ดูงาน สัมนา หรือ ประชุม ที่ประเทศญี่ปุ่น ในราคาและบริการที่ท่านจะประทับใจมีผลงานอ้างอิงมากมาย" />
          </Grid>
          <Grid item xs={12}>
            <Heading {...TextBannerh1Roboto} content="Japan Tour" />
          </Grid>
          <Grid item xs={12}>
            <Heading {...TextBannerh2Roboto} content="Meet our awesome team members, work behind the sense" />
          </Grid>
          <Grid item xs={12}>
            <Heading  {...TextBannerh3Roboto} content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur." />
          </Grid>
          <Grid item xs={12}>
            <Text {...TextBannerTextRoboto} content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur." />
          </Grid>
        </Grid>
      </Boxs>
    </Container>
    </div>
  );
}))

const TextBannerh1 = {
  fontFamily:"DBHeaventRoundedv32" ,
  fontWeight:"Meduim",
  as: 'h1',
  color: '#000',
  fontSize: ['30px', '30px', '30px', '40px', '50px'],
  lineHeight:"30px"
}
const TextBannerh2 = {
  fontFamily:"DBHeaventRoundedv32" ,
  fontWeight:"normal",
  as: 'h2',
  color: '#000',
  fontSize: ['26px', '26px', '26px', '32px', '40px'],
  lineHeight:"30px"
}
const TextBannerh3 = {
  fontFamily:"DBHeaventRoundedv32" ,
  fontWeight:"normal",
  as: 'h3',
  color: '#000',
  fontSize: ['23px', '23px', '23px', '28px', '30px'],
  lineHeight:"30px"
}
const TextBannerh1Roboto = {
  fontFamily:"Roboto" ,
  fontWeight:"Meduim",
  as: 'h1',
  color: '#000',
  fontSize: ['22px', '22px', '22px', '30px', '40px'],
  lineHeight:"22px"
}
const TextBannerh2Roboto = {
  fontFamily:"Roboto" ,
  fontWeight:"unset",
  as: 'h2',
  color: '#000',
  fontSize: ['20px', '20px', '20px', '22px', '29px'],
  lineHeight:"22px"
}
const TextBannerh3Roboto = {
  fontFamily:"Roboto" ,
  fontWeight:"unset",
  as: 'h3',
  color: '#000',
  fontSize: ['18px', '18px', '18px', '18px', '20px'],
  lineHeight:"22px"
}
const TextBannerTextRoboto = {
  fontFamily:"Roboto" ,
  fontWeight:"unset",
  textAlign: "left"
}
const TextBannerh3Sarabun = {
  fontFamily:"Sarabun" ,
  fontWeight:"normal",
  textAlign: "left"
}

export default DetailMobile;
