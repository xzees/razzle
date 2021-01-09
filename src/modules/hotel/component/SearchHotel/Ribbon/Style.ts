import styled from 'styled-components';

interface IText {
  fontSize?: string;
  lineHeight?: string;
  marginTop?: string;
  fontFamily?: string;
}

export const Ribbon = styled.span`
    background: #ed1c24;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    z-index: 999;
    font-size: 25px;
    position: absolute;
    left: 0px;
    text-transform: uppercase;
    top: 20px;
    display: grid;
    text-align: right;
    padding-left: 10px;
    padding-right: 12px;
    padding-top: 7px;
    padding-bottom: 7px;
    p {
      display: unset;
      font-size: inherit;
      line-height: inherit;
    }
    
`;

export const Text = styled.p`
  margin: 0px;
  padding: 0px;
  display: flow-root;
  text-align: center;
  font-size: ${(props: IText) => props.fontSize || 'inherit'} !important;
  line-height: ${(props: IText) => props.lineHeight || 'inherit'} !important;
  margin-top: ${(props: IText) => props.marginTop || 'inherit'} !important;
  `