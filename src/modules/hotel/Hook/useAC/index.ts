
import StorageManager from 'common/Manager/StorageManager';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Store from 'modules/hotel/interface/Component/Store';
import AutocompleteModel from 'modules/hotel/models/AutocompleteModel';
import groupBy from 'modules/hotel/Hook/useAC/groupBy';
import map from 'modules/hotel/Hook/useAC/map';
import APIManager from 'common/Manager/APIManager';

interface UseACOutput {
    getOptionLabel: any;
    value: any;
    onKeyUp: any;
    onChange: any;
    notfind: boolean;
    setOption: any;
    setValue: any;
    loading: boolean;
    options: any;
    history: any;
    setHistory: any;
    propsItem: any;
    propsHistory: any;
    autocompleteUI: any;
}

const index = (props: Store): UseACOutput => {
    const uiStore = props.stores!.HotelRootStore;
    const [searchTerm, setSearchTerm] = useState('');
    const [notfind, setNotfind] = useState(false);
    const [loading, setLoading] = useState(false);
    const [option, setOption] = useState([]);
    const [storageHistory, setStorageHistory] = useState(StorageManager.default.getItem('autocomplete_history'));
    const storageKey = 'autocomplete_history';

    const filter = (value: any): boolean => {
        return value.type !== 'region';
    };

    const api = async (): Promise<void> => {

        APIManager.default.cancelAllRequests()
        
        const response = await uiStore.apiAutocomplete(searchTerm);
        
        const data = response.data.data.map((v: any) => new AutocompleteModel(v));
        
        if (data?.length > 0) {
            const result: any = _.chain(data)
            .groupBy(groupBy)
            .map(map)
            .value();
            setOption(result);
            setLoading(false);

        } else {
            setOption([]);
            setNotfind(true);
        }
    };
    
    let delayDebounceFn: any

    const delayApi = () => {
        if (searchTerm !== '' && searchTerm.length > 3) {
            if (loading === false) { setLoading(true); }
            if (notfind === true) { setNotfind(false); }
            delayDebounceFn = setTimeout(api, 500);
            return () => clearTimeout(delayDebounceFn);
        }
        return () => undefined;
    };

    useEffect(delayApi , [ searchTerm ]);

    const onAutocompleteKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        const evalue = (e.target as HTMLInputElement).value;
        setOption([]);
        if (evalue !== '') {
            setSearchTerm(evalue);
        }
    };

    const optionAutocomplete = (options: { tag: string }): string => {
        return options.tag || '';
    };

    const setHistory = (param: any): void => {

        try {
            let history;
            if (storageHistory) {
                history = JSON.parse(storageHistory);
                const check = history.filter((v: any) => v.tag === param.tag);
                if (check.length === 0) {
                    history = [param, ...history];
                }
                
                if (history.length > 3) {
                    history.pop();
                }
            } else {
                history = [param];
            }
            const historyJson = JSON.stringify(history);
            StorageManager.default.setItem(storageKey, historyJson);
            setStorageHistory(historyJson);
        } catch (e) {
            StorageManager.default.removeItem(storageKey);
            setStorageHistory(null);
        }
    };

    const getHistory = (): AutocompleteModel[] => {

        if (storageHistory) {
            return JSON.parse(storageHistory);
        }
        return [];
    };

    const onAutocompleteChange = (event: any, values: any): void => {
        if (values != null) {
            uiStore.setVAutocomplete(values);
            setHistory(values);
            setOption([]);

        } else {
            uiStore.setVAutocomplete({
                tag: '',
                tagLabel: ''
            });
        }
    };

    const getPropsItem = (param: any): any => {
        const propsLis: any = {...param.props.data.getOptionProps({
                option: param.option,
                index: param.index
            })
        };
        return propsLis;
    };

    const getPropsHistory = (param: any) => {
        return {
            onClick: (e: any): void => {
                onAutocompleteChange({}, param.option);
                if ('setOpen' in param.props) {
                    param.props.setOpen(false);
                }
            }
        };
    };

    const setValue = (value: any) => {
        uiStore.setVAutocomplete(value);
    }

    return {
        getOptionLabel: optionAutocomplete,
        value: uiStore.vAutocomplete,
        onKeyUp: onAutocompleteKeyUp,
        onChange: onAutocompleteChange,
        notfind,
        setOption,
        loading,
        options: option,
        history: getHistory(),
        setHistory,
        setValue, 
        propsItem: getPropsItem,
        propsHistory: getPropsHistory,
        autocompleteUI: uiStore.AutocompleteStore.UI
    };

};

export default index;