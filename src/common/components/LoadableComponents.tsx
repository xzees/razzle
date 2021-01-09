import React from 'react';
import Loadable from "react-loadable";

const LoadableComponents = (component: any, Loading: any) => {
    return Loadable({
        loader: () => component,
        loading: () => Loading,
    })
}

export default LoadableComponents