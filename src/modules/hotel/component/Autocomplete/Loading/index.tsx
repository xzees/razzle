import React from 'react';
import { HooksAutocompleteProps } from '../withHooksHOC';
import {
  UlMobile,
  UlDivInSide,
  UlDivOutSide,
  Ul,
  Li,
  MLabel,
  UlDivOutSideM
} from 'modules/hotel/component/Autocomplete/Style';
import { Skeleton } from '@material-ui/lab';
import i18n from 'utilities/I18n';
import ToolTip from 'modules/hotel/component/ToolTip'
import ColorManager from 'common/Manager/ColorManager';

const renderMobile  = () => {
  return (
    <UlMobile className="listbox" >
        <MLabel radius="false">
              {i18n.t('hotel.search.detail')}
        </MLabel>
        <UlDivInSide>
          <li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </li>
          <li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </li>
          <li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </li>
        </UlDivInSide>
    </UlMobile>
  )
}

const renderDesktop = () => {
  return (
      <ul className="listbox">
        <UlDivOutSideM>
          <MLabel radius="true">
              {i18n.t('hotel.search.detail')}
          </MLabel>
          <Li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </Li>
          <Li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </Li>
          <Li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </Li>
          <Li className="load">
            <Skeleton height={29} width="30%"  animation="wave"  />
            <Skeleton height={29} width="100%"  animation="wave"  />
          </Li>
        </UlDivOutSideM>
      </ul>
  )
}

const index = (props: HooksAutocompleteProps) => {
  if ((props.notfind === false
        && props.data.focused)
        && props.loading === true
  ) {
    return (
      <>
        {!props.isMobile && <>
          {/* <ToolTip 
              minWidth={'100%'} 
              isMobile={props.isMobile}
              arrowColor={ColorManager.default.greyColor}
          > */}
            {renderDesktop()}
          {/* </ToolTip> */}
        </>}
        {props.isMobile && renderMobile()}
      </>
    )
  }
  return (
    <></>
  )
}

export default index