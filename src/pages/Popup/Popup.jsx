import React from 'react';
import Toggle from '../../components/Toggle';
import './Popup.css';
import '../../shared/shared-styles.css';

class Popup extends React.Component {

  state = {
    'minimizedView': true,
    'shorcutsMenuShow': true,
  }

  componentDidMount() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "toggle-help") {
        this.setState({ shorcutsMenuShow: !this.state.shorcutsMenuShow })
      }
    });
  }

  sendMessageToChrome = (message) => {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, message);
    });
  }

  toggleMinimizedView = () => {
    const currState = this.state.minimizedView;
    const action = !currState ? 'minimize-on' : 'minimize-off'

    this.sendMessageToChrome({ 'action': action })
    this.setState({ 'minimizedView': !currState })
  }

  // hideShowShortcutsMenu = () => {
  //   const currState = this.state.shorcutsMenuShow;
  //   const action = !currState ? 'shortcuts-menu-show' : 'shortcuts-menu-hide'

  //   this.sendMessageToChrome({ 'action': action })
  //   this.setState({ 'shorcutsMenuShow': !currState })
  // }

  render() {
    return (
      <div className="popup gwiz">
        <h1>📬 Gmail Wizard</h1>
        <div>
          <Toggle className="pu-toggle" id="1" name="toggleMinimizedView" currentValue={this.state.minimizedView} onChange={this.toggleMinimizedView}/>
          <p className="pu-toggle-label">Toggle Minimized View</p>
        </div>
        {/*
        <div>
          <Toggle className="pu-toggle" id="2" name="hideShowShortcutsMenu" currentValue={this.state.shorcutsMenuShow} onChange={this.hideShowShortcutsMenu}/>
          <p className="pu-toggle-label">Show/Hide Shortcuts Menu</p>
        </div>
          */}
        
        <p>Press <span className="ss-ks-keys">Cmd/Ctr + Shift + Y</span> to toggle the shortcuts menu</p>
      </div>
    );
  }
}

export default Popup;
