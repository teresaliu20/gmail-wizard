import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import './index.css';

console.log("this is the popup page")
console.log(window.location.href)
console.log(window.location.href.startsWith('https://mail.google.com/'))

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
});

chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (response){
        render(<Popup />, window.document.querySelector('#app-container'));
    });
});

