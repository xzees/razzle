import React, { useEffect , useState } from 'react';
import {
  UlDivInSideMobile,
  UlDivOutSideM,
  MLabel,
  UlDivInSideHistory
} from 'modules/hotel/component/Autocomplete/Style';
import i18n from 'utilities/I18n';
import GetItem from '../Items/GetItem';
import { inject, observer } from 'mobx-react';
import HotelManager from 'modules/hotel/Manager/HotelManager';
import PopularDesktop from 'modules/hotel/component/Autocomplete/History/Popular/Desktop';
import Desktop from 'modules/hotel/component/Autocomplete/History/Desktop';
import Mobile from 'modules/hotel/component/Autocomplete/History/Mobile';
import { HooksAutocompleteProps } from 'modules/hotel/component/Autocomplete/withHooksHOC';

const Items = inject('stores')(
    observer((props: HooksAutocompleteProps) => {
    const obj = props.stores!.HotelRootStore.paramForAutocomplete();
    const [ cityPopular , setcityPopular ] = useState<any[]>([]);
    const [ mount , setMount ] = useState<boolean>(false);
    
    useEffect(() => {
        if (!mount) {
            (async () => {
                const cityPopularByAPI = await HotelManager.default.popularcity();
                setcityPopular(cityPopularByAPI!.data || []);
            })();    
            setMount(true);
        }
    });

    let radius = true;

    if (props.history.length > 0) {
        radius = false;
    }
    
    if (props.isMobile) {
        if ((props.data.inputValue.length == 0
            && props.notfind == false)
            && props.loading == false
        ) {
            return (
                <UlDivOutSideM> 
                <ul className="listbox" >
                    {props.history.length > 0 && <Mobile {...{obj, radius, ...props, history: props.history}} />}
                    <MLabel radius="false">
                        {i18n.t('hotel.search.popular')}
                    </MLabel>
                    <UlDivInSideHistory radius="false">
                        <UlDivInSideMobile>
                            <GetItem {...props} groupedOptions={cityPopular} getPropsItem={props.propsHistory} />
                        </UlDivInSideMobile>
                    </UlDivInSideHistory>
                </ul>
                </UlDivOutSideM>
            );
        }
        return (
            <></>
        );
    }

    if ((props.data.inputValue.length === 0
        && props.notfind === false
        )
        && props.loading === false
    ) {
        return (
            <ul>
                <UlDivOutSideM style={{overflow: 'hidden'}}>
                    {props.history.length > 0 && <Desktop {...{obj, radius, ...props, history: props.history}}  />}
                    {cityPopular.length > 0 && <PopularDesktop cityPopular={cityPopular} radius={radius} />}
                </UlDivOutSideM>
            </ul>
        );
    }

    return (
        <></>
    );
  
}));

export default Items;