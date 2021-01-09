import React from 'react';
import Autocomplete from '../Autocomplete';
import { Grid } from '@material-ui/core';
import Datepicker from 'modules/hotel/component/Datepickers';
import Guest from 'modules/hotel/component/Guest';
import FillFull from 'modules/hotel/component/Button/FillFull';
import { inject, observer } from 'mobx-react';
import SearchFormInterface from 'modules/hotel/component/SearchForm/SearchFormInterface';
import i18n from 'utilities/I18n';

const index = (props: SearchFormInterface) => {

    const { Theme , btnSearch } = props;
    return (
        <>
            <Grid 
                item={true} 
                xs={(Theme.Autocomplete?.xs ? Theme.Autocomplete.xs : 12)} 
                md={(Theme.Autocomplete?.md ? Theme.Autocomplete.md : 12)} 
                lg={(Theme.Autocomplete?.lg ? Theme.Autocomplete.lg : 12)} 
                style={Theme.gridAutocomplete}
            >
                <Autocomplete />
            </Grid>
            <Grid 
                item={true} 
                xs={(Theme.Datepicker?.xs ? Theme.Datepicker.xs : 12)} 
                md={(Theme.Datepicker?.md ? Theme.Datepicker.md : 5)} 
                lg={(Theme.Datepicker?.lg ? Theme.Datepicker.lg : 6)}  
                style={Theme.gridDatepicker}
            >
                <Datepicker />
            </Grid>
            <Grid 
                item={true} 
                xs={(Theme.Guest?.xs ? Theme.Guest.xs : 12)} 
                md={(Theme.Guest?.md ? Theme.Guest.md : 4)} 
                lg={(Theme.Guest?.lg ? Theme.Guest.lg : 4)} 
                style={Theme.gridGuest}
            >
                <Guest />
            </Grid>
            <Grid 
                item={true} 
                xs={(Theme.gButton?.xs ? Theme.gButton.xs : 12)} 
                md={(Theme.gButton?.md ? Theme.gButton.md : 3)} 
                lg={(Theme.gButton?.lg ? Theme.gButton.lg : 2)} 
                style={Theme.gridButton} 
            >
                <FillFull onClick={btnSearch} style={Theme.button} >
                    {props.btnText ?? i18n.t('hotel.components.searchform.seachhotel')}
                </FillFull>
            </Grid>
        </>
    );
}
// ));

export default index;