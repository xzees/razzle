import React from 'react';
import { inject, observer } from 'mobx-react';
import LayoutSwitchers from 'modules/hotel/component/Autocomplete/LayoutSwitchers';
import useAC from 'modules/hotel/Hook/useAC';
import i18n from 'utilities/I18n';
import Store from 'modules/hotel/interface/Component/Store';

const Autocomplete = inject('stores')(
  observer((props: Store) => {
    
  const {
    getOptionLabel,
    value,
    onKeyUp,
    onChange,
    notfind,
    setOption,
    setValue,
    loading,
    options,
    history,
    setHistory,
    propsItem,
    propsHistory,
    autocompleteUI
  } = useAC(props);

  const FuncSetHistory = (param: any) => {
    setHistory(param);
  };

  return (
    <LayoutSwitchers
      id={'use-autocomplete-hotel'}
      options={options}
      getOptionLabel={getOptionLabel}
      clearOnBlur={true}
      placeholder={i18n.t('hotel.autocomplete.modal.detail')}
      notfind={notfind}
      setOption={setOption}
      value={value}
      setValue={setValue}
      loading={loading}
      history={history}
      setHistory={FuncSetHistory}
      debug={false}
      onKeyUp={onKeyUp}
      modelLabel={i18n.t('hotel.autocomplete.label')}
      modelTitle={i18n.t('hotel.autocomplete.modal')}
      onChange={onChange}
      propsItem={propsItem}
      propsHistory={propsHistory}
      autocompleteUI={autocompleteUI}
    />
  );
}));

export default Autocomplete;