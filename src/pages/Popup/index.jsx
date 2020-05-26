import React from 'react';
import { render } from 'react-dom';

import InvalidWindowPopup from './InvalidWindowPopup';
import Popup from './Popup';
import './index.css';

console.log(window.location.href)
console.log(window.location.href.startsWith('https://mail.google.com/'))

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("in on message")
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  console.log(request.action)
  alert("works!")
});

chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (response){
        if (response.url.startsWith('https://mail.google.com/')) {
          render(<Popup />, window.document.querySelector('#app-container'));
        }
        else {
          render(<InvalidWindowPopup />, window.document.querySelector('#app-container'));
        }
    });
});