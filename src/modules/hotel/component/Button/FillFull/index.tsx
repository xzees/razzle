import styled from 'styled-components';
import React from 'react'
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';

const Buttons = styled.button<any>`
    border: 1px solid ${(props: any) => props.backgroundColor != undefined ? props.backgroundColor : ColorManager.default.secondaryColor} ;
    background-color: ${(props: any) => props.backgroundColor != undefined ? props.backgroundColor : ColorManager.default.secondaryColor} ;
    border-radius: 4px;
    color: ${ColorManager.default.white};
    font-size: 1.2rem;
    // height: 2.8125rem;
    margin-top: 0;
    cursor: pointer;
    width: 100% !important;
    padding: 8px 24px;
    font-family: ${FontManager.default.secondaryFont};
    :hover {
        background-color: ${ColorManager.default.fourthColor};
        border: 1px solid ${ColorManager.default.fourthColor};
    }
`;
 
const index = (props: any) => {
    return (
        <Buttons {...props} >
            {props.children}
        </Buttons>
    )
}

export default index