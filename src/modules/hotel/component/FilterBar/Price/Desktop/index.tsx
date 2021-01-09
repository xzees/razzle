import React, { useState } from 'react';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';

const styles = {
  MySelectEmpty: styled<any>(Select)`
    &.MuiInputBase-root{
      margin-top: 0;
      background-color: #F3F2FA;
    },
    &.MuiInput-underline:before {
      display: none;
    },
    & > .MuiSelect-icon {
      color: ${ColorManager.default.primaryColor};
    },
    & .MuiSelect-select {
      text-indent: 9px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${ColorManager.default.thirdColor};
      font-size: ${FontManager.default.TEXT_TINY_18};
      line-height: 26px;
    },
  `, 
  MyMenuItem: styled<any>(MenuItem)`
    color: ${ColorManager.default.thirdColor};
    font-size: ${FontManager.default.TEXT_TINY_18};
  `, 
  MyFormControlStyle: styled<any>(FormControl)`
      &.MuiFormControl-root {
          width: 100%;
          margin-bottom: 16px;
          padding: 0;
          height: auto;
          margin: 16px;
          padding-right: 16px;
      },
      .MuiListItem-gutters {
          padding-left: 16px;
      },
      .MuiListItemSecondaryAction-root {
          right: 8px;
      },
  `,
}

interface IPriceOption{
  name: string,
  value: number,
}
interface Iprops {
  stores?: RootStore;
  onReset: boolean;
}

const index = inject('stores')(
  observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const initPriceOptions = [
        { name: 'เลือก', value: 0},
        { name: 'ราคาต่อห้อง/ต่อคืน (รวมภาษีและค่าธรรมเนียม)', value: 0},
        { name: 'ราคาต่อห้อง/ต่อคืน (ไม่รวมภาษีและค่าธรรมเนียม)', value: 0},
    ];
    const [priceOption, setPriceOption] = useState<IPriceOption[]>(initPriceOptions);
    const [priceOptionSelect, setPriceOptionSelect] = useState<number>(priceOption[0].value);

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: number }>) => {
      setPriceOptionSelect(event.target.value);
    };

    return (
      <styles.MyFormControlStyle component="fieldset">
          <styles.MySelectEmpty
            value={priceOptionSelect}
            onChange={handleChange}
            name="priceOptionSelect"
            inputProps={{ 'aria-label': 'priceOptionSelect' }}
          >
            {priceOption.map((opt : IPriceOption, index: number) => {
              return (<styles.MyMenuItem value={opt.value} key={index}>{opt.name}</styles.MyMenuItem>);
            })}
        </styles.MySelectEmpty>
        </styles.MyFormControlStyle>
    );
}));

export default index;