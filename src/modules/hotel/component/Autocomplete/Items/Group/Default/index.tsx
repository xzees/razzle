import React from 'react'
import { Grid } from '@material-ui/core';
import Layout from 'modules/hotel/component/Autocomplete/Items/Layout';
import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import { 
  getLabel,
  numberOfHotel,
  textAfterNumberOfHotel
} from './util';
import FontManager from 'modules/hotel/Manager/FontManager';

const index = (props: any) => {
    const {
      index,
      op
    } = props
    
    return (
      <Li
        className="item" 
        {...props}
      > 
        <Grid container={true} >

            { !('startDate' in props) && <>
            <Layout 
                fontFamily={FontManager.default.primaryFont}
                colorLeft={ColorManager.default.black} 
                left={op.tag}
                inputValue={props?.data?.inputValue}
                right={numberOfHotel(op)}
            />
            <Layout left={getLabel(op)} right={textAfterNumberOfHotel(op)} />
            </>}
            { ('startDate' in props) && <>
            <Layout 
                fontFamily={FontManager.default.primaryFont} 
                colorLeft={ColorManager.default.black} 
                left={op.tag}
                inputValue={props?.data?.inputValue}
                right={props.room}
            />
            <Layout left={getLabel(op)} right={props.adult} />
            <Layout left={props.startDate + ' - ' + props.endDate} right={props.child || '-'} />
            </>}
        </Grid>
      </Li>
    );
};

const Li = styled.li`
    padding: 15px 28px !important;
    border-bottom: 1px solid ${ColorManager.default.greyColor} !important;
`;

export default index;