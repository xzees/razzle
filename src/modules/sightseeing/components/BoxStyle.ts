import styled from "styled-components";

const FeatureSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0 30px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0 30px 0;
  }
  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    .icon__wrapper {
      position: relative;
      background: linear-gradient(
        -60deg,
        rgba(241, 39, 17, 0.7),
        rgba(245, 175, 25, 0.7)
      );
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }
      &:before,
      &:after {
        content: "";
        width: 28px;
        height: 100%;
        position: absolute;
      }
      &:before {
        transform: rotate(45deg);
        background-color: rgba(255, 255, 255, 0.15);
      }
      &:after {
        transform: rotate(-45deg);
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &:hover {
      box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
    }
  }
`;

export default FeatureSectionWrapper;
