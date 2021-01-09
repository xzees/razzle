import React from 'react';
import Input from 'modules/hotel/component/Autocomplete/Input';
import Items from 'modules/hotel/component/Autocomplete/Items';
import History from 'modules/hotel/component/Autocomplete/History';
import Loading from 'modules/hotel/component/Autocomplete/Loading';
import Notfind from 'modules/hotel/component/Autocomplete/Notfind/index';
import { HooksAutocompleteProps, withHooksHOC } from 'modules/hotel/component/Autocomplete/withHooksHOC';
import Grow from '@material-ui/core/Grow';
import {
  UlDivOutSide,
  Ul,
} from 'modules/hotel/component/Autocomplete/Style';
interface AutoCompleteState {
  textSearch: string;
  onOpen: boolean;
  placeholder: string;
  options: any;
}
class Component extends React.PureComponent<HooksAutocompleteProps, AutoCompleteState> {
  
  constructor(props: HooksAutocompleteProps) {
    super(props);
  }

  public render() {
    if (this.props.isMobile) {
      return (
        <>
          {<Input {...this.props} />}
          <div {...this.props.data.getRootProps()}>
            <History {...this.props} />
            <Items {...this.props} />
            <Loading {...this.props} />
            <Notfind {...this.props} /> 
          </div>
        </>
      );
    }
    
    return (
      <>
        <div {...this.props.data.getRootProps()}>
          {<Input {...this.props} />}
          <ItemDesktop {...this.props} />
        </div>
      </>
    );
  }
}

const ItemDesktop = (props: any) => {

  const [ state , setState] = React.useState(false);
  
  if (state === false && props.data.popupOpen === true) {
    setState(true);
  }
  if (state === true && props.data.popupOpen === false) {
    setState(false);
  }
  
  const styleGrow = { 
    transformOrigin: '0 0 0',
    zIndex: 99999
  };

  if (state === true) {
    return (
      <Grow 
        in={state} 
        style={styleGrow}
        {...{ timeout: 300 }}
      >
        <UlDivOutSide> 
          <Ul className="listbox" {...props.data.getListboxProps()}>
              <History {...props} />
              <Notfind {...props} /> 
              <Items {...props} />
              <Loading {...props} />
          </Ul>
        </UlDivOutSide>
      </Grow>
    );
  }
  return <></>;
};

export default withHooksHOC(Component);