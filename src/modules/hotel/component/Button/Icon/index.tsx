import styled from 'styled-components';
import React from 'react'
import FontManager from 'modules/hotel/Manager/FontManager';

const ViewButton = styled.a<any>`
  border: 2px solid #694a8d;
  border-radius: 4px;
  color: #694a8d;
  display: table-cell;
  font-size: ${FontManager.default.text};
  height: 2.8125rem;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  cursor: pointer;
  padding: 8px 24px;
  font-family: "DBHeaventRoundedMedv32";
`;
 
const index = (props: any) => {
    return (
        <ViewButton {...props} >
            {props.children}
        </ViewButton>
    )
}

export default index