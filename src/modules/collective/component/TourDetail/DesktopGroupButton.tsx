import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { TourDetailProps } from './Interface';
import styled from 'styled-components';
import { AppImage } from 'common/components';
import ImageManager from "common/Manager/ImageManager";
import ColorManager from 'common/Manager/ColorManager';
import { downloadPDF } from 'modules/collective/pages/Detail';

const DesktopGroupButton = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;

    return (
      <GroupButton>
        <ul className="full-width form-group">
          <li className="li-icons form-group">
            <a id="icon-td-pc-lineshare" className="icons-link" title="ส่งให้เพื่อนทางไลน์" target="_blank"
              href={`https://line.me/R/msg/text/?แนะนำแพ็คเกจทัวร์ดีดีจากไทยทราเวลเซ็นเตอร์ https://www.thaitravelcenter.com/th/tour/detail/${tourDetail?.tourID}/`} >
              <AppImage effect="blur" src={ImageManager.default.images.common.lineShared} alt="ส่งให้เพื่อนทางไลน์" />แชร์เพื่อนใน LINE
            </a>
          </li>
          {/* <li className="li-icons form-group">
            <a id="icon-td-pc-download" className="icons-link" title="ดาวน์โหลดทัวร์นี้เป็นเอกสาร PDF" target="_blank"
              href={`/downloads/voucher/print_tour.php?tour_code=${tourDetail?.tourCode}`} >
              <AppImage effect="blur" src={ImageManager.default.images.common.pdf} alt="ไฟล์ pdf" />ดาวน์โหลดทัวร์
            </a>
          </li> */}
          <li className="li-icons form-group">
            <a id="icon-td-pc-download" className="icons-link" title="ดาวน์โหลดทัวร์นี้เป็นเอกสาร PDF" href="#" onClick={() => downloadPDF('https://www.thaitravelcenter.com/tool/print/tour/', 'post', { tour_code: tourDetail?.tourCode })} >
              <AppImage effect="blur" src={ImageManager.default.images.common.pdf} alt="ไฟล์ pdf" />ดาวน์โหลดทัวร์
            </a>
          </li>
          {/* <li className="li-icons form-group">
            <a id="icon-td-pc-print" className="icons-link" title="พิมพ์ทัวร์นี้ทางเครื่องพิมพ์" target="_blank"
              href={`/print_data/print_html_tour.php?tour_code=${tourDetail?.tourCode}`} >
              <AppImage effect="blur" src={ImageManager.default.images.common.printer} alt="พิมพ์" />พิมพ์ทัวร์
            </a>
          </li> */}
          <li className="li-icons form-group">
            <a id="icon-td-pc-email" className="icons-link addthis_button_email" target="_blank" title="อีเมล์"
              href={`mailto:?subject=${tourDetail?.title} ThaitravelCenter.com&amp;body=Introducing a good tour from Thai Travel Center : https://www.thaitravelcenter.com/th/tour/detail/${tourDetail?.tourID}/`} >
              <AppImage effect="blur" src={ImageManager.default.images.common.email} alt="ส่งอีเมล" />ส่งทัวร์ทางอีเมลล์
            </a>
          </li>
          {/* <li className="li-icons form-group">
            <a id="icon-td-pc-socialshare" className="icons-link addthis_button addthis_button_compact" title="แชร์ทัวร์นี้กับเพื่อน"
              href="https://www.addthis.com/bookmark.php?v=250&amp;pub=thaitravelcenter" >
              <AppImage visibleByDefault src={ImageManager.default.images.common.shared} alt="แชร์" />แชร์ผ่านโซเชียล
            </a>
          </li> */}
          <li className="li-icons form-group">
            <a className="icons-link" title="เลือกทัวร์อื่น" href={`/${tourDetail?.country[0]?.code}/`} >
              <AppImage effect="blur" src={ImageManager.default.images.common.map} alt="เลือกทัวร์อื่น" />เลือกทัวร์อื่น
            </a>
          </li>
        </ul>
      </GroupButton>
    )
  })
);

const GroupButton = styled.div`
  padding: 0 20px 12px 20px;
  .text-center {
    text-align: center !important;
  }
  .form-group {
    line-height: 24px;
  }
  .full-width {
    width: 100% !important;
  }
  ul li.li-icons {
    margin-bottom: 2%;
  }
  ul li.li-icons a.icons-link {
    align-items: center;
    color: #555;
    display: flex;
    font-size: 1.333em;
    letter-spacing: -.009em;
  }
  ul li.li-icons a.icons-link img {
    margin-right: 5%;
    width: 25px;
  }
  span.lazy-load-image-loaded {
    line-height: 0;
    margin-right: 5%;
    img {
      margin-right: 0;
    }
  }
`;
export default DesktopGroupButton;