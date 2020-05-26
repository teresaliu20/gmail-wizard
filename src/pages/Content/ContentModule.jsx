import React from 'react';
import "../../shared/shared-styles.css";
import './ContentModule.css';
import keyboardShortcutsData from './keyboardShortcutsData.js';

class ContentModule extends React.Component {
  render() {
    return (
      <div className='cm-content gwiz'>
        <h2 className="title">Keyboard Shortcuts</h2>
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
            <p className="cm-ks-action">For full list of Gmail shortcuts</p>
            <p className="cm-ks-keys">?</p>
            <p className="cm-ks-section-desc">Note: Keyboard shortcuts must be enabled in Gmail settings</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentModule;