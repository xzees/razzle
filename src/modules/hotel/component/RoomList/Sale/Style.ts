import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';

export const boxStyle: any = {
    textAlign: 'right',
    width: '100%'
};

export const iconStyle = {
    width: '19px',
    verticalAlign: 'middle',
    marginRight: '2px',
};

export const MText = styled.div`
    font-family: ${FontManager.default.secondaryFont};
    position: relative;
    display: inline-block;
    font-size: ${FontManager.default.TEXT_TINY_18} !important;
    a {
        color: #d60c0c !important;
    }
    width: 100%;
    margin-bottom: 10px;
    .tooltiptext {
        background-color: #ffeaea;
        color: #d60c0c !important;
        color: #fff;
        border: 1px solid #e8e8e8;
        text-align: left;
        padding: 2px 5px;
        border-radius: 5px;
        position: inherit;
        font-size: ${FontManager.default.TEXT_TINY_18} !important;
    }
    .tooltiptext::after {
        content: '';
        position: absolute;
        top: 80%;
        left: 88%;
        margin-left: -4px;
        border-width: 4px;
        border-style: solid;
        border-color: #ffeaea00 #ffeaea #ffeaea #ffeaea00 ;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        box-shadow: 1px 1px 0px 0px #e8e8e8;
    }
`;