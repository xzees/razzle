import { HooksAutocompleteProps } from 'modules/hotel/component/Autocomplete/withHooksHOC';

type HooksAutocompletePropsDefault = HooksAutocompleteProps;

interface HistoryInterface extends HooksAutocompletePropsDefault {
    radius: boolean;
    obj: any;
    history: any[];
    propsHistory: any;
}

export default HistoryInterface;