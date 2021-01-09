import React, { FunctionComponent } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import AutoCompleteSearch from '../../AutoCompleteSearch';
import ModalScreen from '../../ModalScreen';
import { InputWrapper, TextField } from './Style';

type Props = {
  stores?: RootStore;
};

const EditInputSearch: FunctionComponent<Props> = ({ stores }) => {
  const uiStore = stores!.PackageRootStore.DestinationStore;

  return (
    <ModalScreen
      title="ค้นหากิจกรรม"
      fullscreen
      buttonOpenModal={(props: any) => {
        return (
          <InputWrapper>
            <TextField
              variant="outlined"
              placeholder="ค้นหากิจกรรม"
              fullWidth
              inputProps={{
                value: uiStore.destination?.name,
                readOnly: true,
              }}
              onClick={props.onClick}
            />
          </InputWrapper>
        );
      }}
    >
      <AutoCompleteSearch isMobile />
    </ModalScreen>
  );
};

export default inject('stores')(observer(EditInputSearch));
