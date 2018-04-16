import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FlatButton from 'material-ui/FlatButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {

  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <FlatButton label="Login" />
    );
  }
}


/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {

  render() {
    return (
      <div>
      
        <AppBar
          title="Home"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<Login />}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;