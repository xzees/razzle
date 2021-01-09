import React from "react";

import LayoutSwitcher from 'common/components/LayoutSwitcher';
import DetailDesktop from "./DetailDesktop";
import DetailMobile from "./DetailMobile";


const Detail = () =>{
    return (
      <LayoutSwitcher 
        desktopView={<DetailDesktop  />}
        mobileView={<DetailMobile  />}
      />
    )
}

export default Detail;
