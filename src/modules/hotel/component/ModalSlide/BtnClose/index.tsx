import React from 'react';
import {
    ClearRoundedIcons
} from '../Style'

interface IBtnClose {
    div?: any
    icon?: any
    onClick: () => void
    children?: any
}

const index = (props: IBtnClose) => {

  return (
        <div style={{
            width: '100%',
            textAlign: 'right',
            marginTop: '-10px'
        }}
            {...props!.div}
        >
            {!props.children && <ClearRoundedIcons 
                onClick={props.onClick}  
                {...props!.icon}
            />}
            {props!.children}
        </div>
  );
}

export default index