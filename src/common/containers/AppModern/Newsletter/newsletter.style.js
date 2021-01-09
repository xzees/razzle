import styled from "styled-components";


const NewsletterWrapper = styled.div`
  position: relative;
  background-color: white;
  padding: 20px 10px;

  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 990px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    margin-right: 20px;
    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #440099;
        }
        .highlight {
          background: #fff;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      padding: 10px 15px;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #440099;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
  .reusecore__button {
    background-color: #440099;
    color: rgb(15, 33, 55);
    font-size: 16px;
    letter-spacing: -0.1px;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    text-transform: capitalize;
    &:hover {
      box-shadow: #1e2a4a 0px 12px 24px -10px;
    }
  }
`;

export default NewsletterWrapper;
