import { printLine } from './modules/print';
import ContentModule from './ContentModule';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
console.log('trying to modify gmail')

printLine("Using the 'printLine' function from the Print Module");

const app = document.createElement('div');
app.id = "cm";
document.body.appendChild(app);
document.body.classList.add("minimized");

ReactDOM.render(<ContentModule />, app);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("content script: on message: ", request.action)

  // toggle content module based on command toggle-help
  if (request.action === 'toggle-help') {
    const contentModule = document.getElementById(app.id);
    if (contentModule.style.visibility === "hidden") {
      contentModule.style.visibility = "visible";
    } else {
      contentModule.style.visibility = "hidden";
    }
  }
  else if (request.action === 'minimize-on') {
    document.body.classList.add("minimized");
    document.getElementsByClassName('nH oy8Mbf nn aeN')[0].classList.add('bhZ')
    document.getElementsByClassName('nH bAw nn')[0].classList.add('it')
  }
  else if (request.action === 'minimize-off') {
    document.body.classList.remove("minimized");
  }
});
