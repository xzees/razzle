import React from 'react';
import GroupHotel from 'modules/hotel/component/Autocomplete/Items/Group/Default';
import { HooksAutocompleteProps } from 'modules/hotel/component/Autocomplete/withHooksHOC';

interface GetItemInterface extends HooksAutocompleteProps {
  [key: string]: any;
}

const GetItem = (props: GetItemInterface) => {
  
  const funcMap = (option: any, index: any) => {
    const setProp = {props, option, index};
    const propsLis = props.getPropsItem(setProp);
    return (
      <GroupHotel key={index} {...props} {...propsLis} op={option} index={index} />
    );
  };

  return (
    <>
      {props.groupedOptions.map(funcMap)}
    </>
  );
};

export default GetItem;