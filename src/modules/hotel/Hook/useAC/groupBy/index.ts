import AutocompleteModel from 'modules/hotel/models/AutocompleteModel';

const groupBy = (value: AutocompleteModel): string => {
    return value.latitude + '|' + value.longitude;
};

export default groupBy;