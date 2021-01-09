import React from 'react'
import { Box, Grid } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import ReactHtmlParser from 'react-html-parser';
import Highlighted from 'modules/hotel/component/Autocomplete/Items/Highlighted'
import FontManager from 'modules/hotel/Manager/FontManager';
interface LayoutInItem {
    left: any; 
    right: any; 
    colorLeft?: string; 
    inputValue?: any | undefined
    fontFamily?: string;
}

const LayoutInItem = (props: LayoutInItem) => {

    let Tag
    if(props.inputValue != false) {
      Tag = (props: any) => (
            <>
                <Highlighted text={props.left} highlight={props.inputValue} />
            </>
        )
    }else{
      Tag = (props: any) => (
        <>
            {props.left}
        </>
      )
    }
    
    return (
      <>
        <Grid item={true} xs={7}>
          <Box 
            color={props.colorLeft || ColorManager.default.fourthColor} 
            fontSize={FontManager.default.TEXT_TINY_18}
            whiteSpace={'nowrap'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            lineHeight={1}
            fontFamily={props.fontFamily}
          >
            {Tag(props)} {ReactHtmlParser('&nbsp;')}
          </Box>
        </Grid>
        <Grid item={true} xs={5}>
          <Box 
            color={ColorManager.default.black} 
            fontSize={FontManager.default.TEXT_TINY_18} 
            textAlign={'right'}  
            lineHeight={1}>
            {props.right} {ReactHtmlParser('&nbsp;')}
          </Box>
        </Grid>
      </>
    );
};

export default LayoutInItem;