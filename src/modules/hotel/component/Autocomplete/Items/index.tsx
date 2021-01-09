import React from 'react';
import {
  UlDivOutSide,
  UlDivInSideMobile,
  Ul,
  UlDivOutSideM,
  UlDivInSide,
  MLabel
} from 'modules/hotel/component/Autocomplete/Style'
import i18n from 'utilities/I18n';
import { HooksAutocompleteProps } from 'modules/hotel/component/Autocomplete/withHooksHOC';
import GetItem from './GetItem'


const Items = (props: HooksAutocompleteProps) => {
  
  if (props.data.groupedOptions.length === 0 || props.data.inputValue.length < 1) {
    return <></>;
  }

  if (props.isMobile) {
    return (
      <UlDivOutSideM> 
        <ul className="listbox" >
        <MLabel radius="false">
              {i18n.t('hotel.search.detail')}
        </MLabel>
            <UlDivInSideMobile>
              <GetItem {...props} groupedOptions={props.data.groupedOptions} getPropsItem={props.propsItem} />
            </UlDivInSideMobile>
        </ul>
      </UlDivOutSideM>
    );
  }

  return (
    
    <ul>
      <UlDivOutSideM style={{overflow:'hidden'}}>
          <MLabel radius="true">
              {i18n.t('hotel.search.detail')}
          </MLabel>
          <UlDivInSide>
            <UlDivInSideMobile>
              <GetItem {...props} groupedOptions={props.data.groupedOptions} getPropsItem={props.propsItem} />
            </UlDivInSideMobile>
          </UlDivInSide>
    </UlDivOutSideM>
    </ul>

  )
}

export default Items;