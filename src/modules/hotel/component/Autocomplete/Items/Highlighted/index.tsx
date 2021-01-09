import React from 'react'
import _ from 'lodash'
import { TextHilight } from 'modules/hotel/component/Autocomplete/Style'

const index = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
      <span>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <TextHilight className={'item'} key={i}>{part}</TextHilight> : <span key={i}>{part}</span>
         ))}
     </span>
    )
}

export default index