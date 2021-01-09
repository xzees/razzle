import React from 'react';
import Adult from './Adult'
import Child from './Child'
import i18n from 'utilities/I18n';

const Layout = ({
    room,
    adult,
    child,
    roomAdd,
    roomRemove,
    adultAdd,
    adultRemove,
    childAdd,
    childRemove,
    childOld,
    childText,
    childHandleChange
}: any) => {
    
    return (
        <>
            <Adult  
                minusChk={1}
                value={room}
                CircleAddClick={roomAdd}
                CircleRemoveClick={roomRemove}
                text={i18n.t('hotel.search.room')}
            />
            <Adult  
                minusChk={1}
                value={adult}
                CircleAddClick={adultAdd}
                CircleRemoveClick={adultRemove}
                text={i18n.t('hotel.search.adult')}
            />
            <Adult
                minusChk={0}
                value={child}
                CircleAddClick={childAdd}
                CircleRemoveClick={childRemove}
                text={i18n.t('hotel.search.child')}
            />
            <Child  
                value={childOld}
                map={child}
                childHandleChange={childHandleChange}
                btnClickAC={childOld}
                text={childText()}
            />
        </>
    )
}

export default Layout;