import React from 'react';
import Style from './Style';

export default function NavButton(props: any) {
    
    const { children, onClick, style } = props
    return (
        <div style={style} >
            <Style.NavButton
                type="button"
                onClick={onClick}
            >
                {children}
            </Style.NavButton>
        </div>
    );
}
