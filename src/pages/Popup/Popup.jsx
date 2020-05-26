import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

class Popup extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>📬 Wizard</h1>
        <p>Show Keyboard Shortcuts Help Bar: </p>
        <p>Shift + Cmd/ctr + Y</p>
      </div>
    );
  }
}

export default Popup;
