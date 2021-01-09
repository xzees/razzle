import _ from 'lodash';
import React, { FunctionComponent, memo } from 'react';
import { inject, observer } from 'mobx-react';
import { Grow } from '@material-ui/core';
import { useAutocomplete } from '@material-ui/lab';
import useAutoCompleteSearch from 'modules/package/Hook/useAutoCompleteSearch';
import RootStore from 'stores';
import Items from './Items';
import { InputSearch } from '../InputSearch';
import {
  InputWrapper,
  OutSideWrapper,
  ListBoxWrapper,
  InputSearchMobile,
} from './Style';

type Props = {
  stores?: RootStore;
  id?: string | undefined;
  isMobile: boolean;
  isOpacity?: boolean;
  width?: string | number;
  handleCloseModal?: () => void;
};

const AutoCompleteSearch: FunctionComponent<Props> = (props: Props) => {
  const { stores, id, isMobile, isOpacity, width, handleCloseModal } = props;

  const uiStore = stores!.PackageRootStore.DestinationStore;

  const {
    value,
    inputValue,
    options,
    histories,
    loading,
    isSelectedValue,
    getOptionLabel,
    getOptionSelected,
    onKeyUp,
    onChange,
  } = useAutoCompleteSearch({
    destination: uiStore.destination,
    setDestination: uiStore.setDestination,
    handleCloseModal,
  });

  const customOptions = inputValue.length ? options : histories;

  const {
    groupedOptions,
    focused,
    popupOpen,
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
  } = useAutocomplete({
    value,
    options: customOptions,
    getOptionLabel,
    getOptionSelected,
    onChange,
    ...(isMobile ? { open: true } : {}),
  });

  if (isMobile) {
    return (
      <div {...getRootProps()}>
        <InputWrapper>
          <InputSearchMobile
            variant="outlined"
            placeholder="ค้นหากิจกรรม"
            fullWidth
            inputProps={{
              ...getInputProps(),
              onKeyUp,
            }}
          />
        </InputWrapper>
        <Items
          inputValue={inputValue}
          groupedOptions={groupedOptions}
          histories={histories}
          loading={loading}
          isMobile
          getListboxProps={getListboxProps}
          getOptionProps={getOptionProps}
        />
      </div>
    );
  }

  return (
    <div {...getRootProps()}>
      <InputSearch
        label="ค้นหาโดยจุดหมายปลายทาง"
        placeholder="ค้นหากิจกรรม"
        fullWidth
        isOpacity={isOpacity && !focused}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          ...getInputProps(),
          onKeyUp,
        }}
      />
      {!isSelectedValue && (
        <Grow
          in={popupOpen}
          style={{ transformOrigin: '0 0 0', zIndex: 999999999 }}
          timeout={300}
        >
          <OutSideWrapper width={width}>
            <ListBoxWrapper>
              <Items
                inputValue={inputValue}
                groupedOptions={groupedOptions}
                histories={histories}
                loading={
                  loading || groupedOptions.length !== customOptions.length
                }
                isMobile={false}
                getListboxProps={getListboxProps}
                getOptionProps={getOptionProps}
              />
            </ListBoxWrapper>
          </OutSideWrapper>
        </Grow>
      )}
    </div>
  );
};

export default memo(inject('stores')(observer(AutoCompleteSearch)));
