import AutocompleteModel from 'modules/hotel/models/AutocompleteModel';

const map = (value: AutocompleteModel): AutocompleteModel[] => {
    return {
        ...value[0]
    };
};

export default map;