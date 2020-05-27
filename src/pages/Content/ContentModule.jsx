import React from 'react';
import Footer from '../../components/Footer';
import "../../shared/shared-styles.css";
import './ContentModule.css';
import keyboardShortcutsData from './keyboardShortcutsData.js';

class ContentModule extends React.Component {
  render() {
    return (
      <div className='cm-content gwiz'>
        <h2 className="title">Keyboard Shortcuts</h2>
        <p>Press <span className="ss-ks-keys">Cmd/Ctr + Shift + Y</span> to show/hide the shortcuts menu</p>
        <div>
          <div className="cm-ks-wrapper">
            {keyboardShortcutsData.map((ksSection) => (
              <div className="cm-ks-section">
                <hr />
                <h3 className="cm-ks-section-title">{ksSection.title}</h3>
                {ksSection.shortcuts.map((ks) => (
                  <div className="cm-ks-row">
                    <p className="cm-ks-action">{ks.action}</p>
                    <p className="ss-ks-keys">{ks.keys}</p>
                  </div>
                ))}
              </div>
            ))}
            <hr />
            <p className="small-text bold">The default keyboard shortcuts must be enabled in Gmail settings.</p>
            <p className="small-text">The above list is a subset of helpful shortcuts. For the full list of Gmail shortcuts, press <span className="ss-ks-keys">?</span>.</p>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentModule;