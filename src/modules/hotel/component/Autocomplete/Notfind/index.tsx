import React from 'react'
import { HooksAutocompleteProps } from '../withHooksHOC'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Notfind = (props: HooksAutocompleteProps) => {
    if (
        (props.data.groupedOptions.length === 0 && props.data.focused) && 
        props.notfind === true
    ) {
        if (props.isMobile) {
            return (
                <Mobile />
            );
        }
        
        return (
            <Desktop />
        );
        
    }
    return (
        <></>
    )
}

export default Notfind;