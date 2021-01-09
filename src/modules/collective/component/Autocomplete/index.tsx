import React from 'react'
import LayoutSwitcher from 'common/components/LayoutSwitcher'
import AutoCompleteDesktop from './AutoComplete'
import ModalScreen from './ModalScreen'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ColorManager from 'common/Manager/ColorManager'

const Autocomplete = (props: any) => {
  return (
    <LayoutSwitcher
      desktopView={<AutoCompleteDesktop {...props} />}
      mobileView={
        <ModalScreen
          fullscreen={true}
          label={props.modelLabel}
          closeBtnIcon={<ExpandMoreIcon fontSize={'large'} style={{
            color: ColorManager.default.white
          }} />}
          title={props.modelTitle}
          {...props}
        />
      }
    />
  )
}

export default Autocomplete