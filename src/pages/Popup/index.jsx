import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import './index.css';

console.log("this is the popup page")
console.log(window.location.href)
console.log(window.location.href.startsWith('https://mail.google.com/'))

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
});

chrome.windows.getCurrent((w) => {
    chrome.tabs.getSelected(w.id,
    (response) => {
        chrome.storage.local.get({'minimizedViewShow' : true, 'shortcutsMenuShow': true}, (result) => {
          console.log("result in popup")
          console.log(result)
          render(<Popup minimizedViewShow={result.minimizedViewShow} shortcutsMenuShow={result.shortcutsMenuShow}/>, window.document.querySelector('#app-container'));
        });
    });
});

