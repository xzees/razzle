import React from 'react'
import FontManager from 'modules/hotel/Manager/FontManager';
import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';

const ViewButton = styled.a<any>`
  border: 2px solid ${ColorManager.default.fifthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fifthColor};
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