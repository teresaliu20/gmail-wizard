import React from 'react';
import './ContentModule.css';
import keyboardShortcutsData from './keyboardShortcutsData.js';

class ContentModule extends React.Component {
  render() {
    return (
      <div className='cm-content'>
        <h2 className="title">Keyboard Shortcuts</h2>
        <div>
          <div className="cm-ks-wrapper">
            {keyboardShortcutsData.map((ksSection) => (
              <div className="cm-ks-section">
                <h3 className="cm-ks-section-title">{ksSection.title}</h3>
                {ksSection.shortcuts.map((ks) => (
                  <div className="cm-ks-row">
                    <p className="cm-ks-action">{ks.action}</p>
                    <p className="cm-ks-keys">{ks.keys}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentModule;