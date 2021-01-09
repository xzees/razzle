import styled from "styled-components";
import ImageManager from "common/Manager/ImageManager";
import { Grid } from '@material-ui/core';

const FooterWrapper = styled.section`
  background-color: #32325d;
  background-image: url(${ImageManager.default.images.common.footer.bgfooter});
  background-position: 75% bottom;
  background-repeat: no-repeat;
  background-size: 35%;
  padding: 20px 10px;
  @media (max-width: 1440px) {
    background-position: 75% bottom;
    background-repeat: no-repeat;
    background-size: 50%;
  }
  @media (max-width: 990px) {
    background-position: 75% bottom;
    background-repeat: no-repeat;
    background-size: 50%;
  }
  @media (max-width: 767px) {
    background-position: 40% bottom;
    background-repeat: no-repeat;
    background-size: 80%;
    padding: 20px 0 20px 0;
  }
  .img-icons {
    border-radius: 20%;
  }
  .svg-icon {
    width: 13%;
    border-radius: 25%;
    padding: 5px;
    height: 100%;
  }
  .Language_search_select {
    max-width: 135px;
    @media (max-width: 575px) {
      height: 52px;
      margin-bottom: 20px;
    }
    @media (max-width: 480px) {
      height: 20px;
      margin-bottom: 0px;
    }
    .select__control,
    .select-field__wrapper {
      height: 100%;
    }
    .select__control {
      padding: 0 15px 0 0px;
      box-shadow: none;
      position: relative;
      border-color: transparent;
      background: transparent;
      @media (min-width: 576px) {
        border-color: transparent;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        &:before {
          content: "";
          position: absolute;
          width: 1px;
          height: 55%;
          background: transparent;
          display: block;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }

      .select__placeholder {
        color: #fff;
        font-family: "Lato";
        font-weight: 400;
      }
      .select__indicator {
        color: #fff;
      }
      .select__value-container {
        padding: 0;
        .select__single-value {
          color: #fff;
          font-family: "Lato";
          font-weight: 400;
        }
      }
    }
    .select__indicator-separator {
      display: none;
    }
  }
  .appDownload {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .imageWrapper {
    display: flex;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
    img {
      margin-right: 15px;
      @media (max-width: 1200px) {
        margin-bottom: 15px;
        margin-right: 0;
        width: 150px;
      }
    }
  }
  .copyRight {
    margin-top: -1%;
    margin-left: 0;
    margin-right: 0;
    width: calc(100% - 80px);
    @media (max-width: 1440px) {
    }
    @media (max-width: 768px) {
      width: calc(100% - 20px);
      margin-top: 40px;
    }
    @media (max-width: 600px) {
      margin-top: 10px;
    }
    .copyRightText {
      font-family: "DBHeaventRoundedv32";
      font-weight: 400;
      color: #fff;
      @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .footer_social {
      margin-left: auto;
      margin-top: -15px;
      @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 15px;
      }
      a {
        &:hover {
          color: #fff;
          opacity: 0.85;
        }
      }
    }
  }
  .mainRow {
    margin-top: 50px;
  }
`;

const List = styled.ul`
  @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  a {
    font-family: "DBHeaventRoundedv32";
    color: #fff;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      opacity: 0.85;
    }
    // @media (max-width: 767px) {
    //   line-height: 46px;
    // }
  }
  @media (max-width: 959px) {
    flex-grow: 0;
    flex-basis: 50%;
    max-width: 50%;
  }
`;
export const BgImageWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  @media (max-width: 1200px) {
    display: none;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export { List, ListItem };

export default FooterWrapper;

export const BoxDW = styled(Grid)`
  @media(min-width: 960px) and (max-width: 1219px) {
    flex-grow: 0 !important;
    max-width: 100% !important;
    flex-basis: 100% !important;
    width: 100% !important;
  }
`;