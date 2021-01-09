import ColorManager from 'common/Manager/ColorManager';
import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loading = (props: any) => {
    return (
        <div style={{
            width: '100%',
            marginTop: '50px',
            marginBottom: '50px',
            textAlign: 'center'
        }}>
            <BeatLoader color={ColorManager.default.appColor} />
        </div>
    )
}

export default Loading;