import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import './index.css';

console.log("This is the popup page.")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
});

chrome.windows.getCurrent((w) => {
    chrome.tabs.getSelected(w.id,
    (response) => {
        chrome.storage.local.get({'minimizedViewShow' : true, 'shortcutsMenuShow': true}, (result) => {
          render(<Popup minimizedViewShow={result.minimizedViewShow} shortcutsMenuShow={result.shortcutsMenuShow}/>, window.document.querySelector('#app-container'));
        });
    });
});

