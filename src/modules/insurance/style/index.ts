import styled, { css } from "styled-components";

const Teststyle = styled.div`
  margin: -0.5em;
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    line-height: 1.5em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
  }
  h1,
  h2,
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h4,
  h5,
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 3.3125rem;
    line-height: 1.15em;
  }
  h2 {
    font-size: 2.25rem;
    line-height: 1.5em;
  }
  h3 {
    font-size: 1.5625rem;
    line-height: 1.4em;
  }
  h4 {
    font-size: 1.125rem;
    line-height: 1.5em;
  }
  h5 {
    font-size: 1.0625rem;
    line-height: 1.55em;
  }
  h6 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    margin: 0 0 10px;
  }
  b,
  strong {
    font-weight: 700;
  }

  // Prevent highlight on mobile
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    &:focus {
      outline: 0;
    }
  }

  a {
    text-decoration: none;
    background-color: transparent;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

export default Teststyle;
