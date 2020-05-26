import React from 'react';
import Toggle from '../../components/Toggle';
import './Popup.css';
import '../../shared/shared-styles.css';

class Popup extends React.Component {

  state = {
    'minimizedViewShow': this.props.minimizedViewShow,
    'shortcutsMenuShow': this.props.shortcutsMenuShow
  }

  componentDidMount() {
    chrome.storage.onChanged.addListener((changes, namespace) => {
       console.log("changingggf")
       console.log(changes)
       if ('shortcutsMenuShow' in changes) {
         this.setState({
           'shortcutsMenuShow': changes.shortcutsMenuShow.newValue
         }, () => console.log(this.state))
       }
       else if ('minimizedViewShow' in changes) {
        this.setState({
           'minimizedViewShow': changes.minimizedViewShow.newValue
        })
      }
    })
  }


  sendMessageToChrome = (message) => {
    chrome.tabs.query({currentWindow: true, active: true},  (tabs) => {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, message);
    });
  }

  toggleMinimizedView = () => {

    // toggle minimzed view in storage
    chrome.storage.local.get({'minimizedViewShow' : true}, (result) => {
      chrome.storage.local.set({'minimizedViewShow': !result.minimizedViewShow});
    });
    this.setState({'minimizedViewShow': !this.state.minimizedViewShow}, () => {
      console.log("toggled")
    })
  }

  hideShowShortcutsMenu = () => {
    // toggle shortcuts menu in storage
    chrome.storage.local.get({'shortcutsMenuShow' : true}, (result) => {
      chrome.storage.local.set({'shortcutsMenuShow': !result.shortcutsMenuShow});
    });
    this.setState({'shortcutsMenuShow': !this.state.shortcutsMenuShow})
  }

  render() {
    return (
      <div className="popup gwiz">
        <h1>📬 Gmail Wizard</h1>
        <div>
          <Toggle className="pu-toggle" id="1" name="toggleMinimizedView" value={this.state.minimizedViewShow} onChange={this.toggleMinimizedView}/>
          <p className="pu-toggle-label">Toggle Minimized View</p>
        </div>
        <div>
          <Toggle className="pu-toggle" id="2" name="hideShowShortcutsMenu" value={this.state.shortcutsMenuShow} onChange={this.hideShowShortcutsMenu}/>
          <p className="pu-toggle-label">Show/Hide Shortcuts Menu</p>
        </div>
     
        <p>Press <span className="ss-ks-keys">Cmd/Ctr + Shift + Y</span> to toggle the shortcuts menu</p>
      </div>
    );
  }
}

export default Popup;
