import ContentModule from './ContentModule';
import React from 'react';
import ReactDOM from 'react-dom';

const app = document.createElement('div');
app.id = 'cm';

document.body.appendChild(app);
document.body.classList.add('minimized');

ReactDOM.render(<ContentModule />, app);

function addMinimizedView() {
  document.body.classList.add('minimized');
  document
    .getElementsByClassName('nH oy8Mbf nn aeN')[0]
    .classList.add('bhZ');
  document.getElementsByClassName('nH bAw nn')[0].classList.add('it');
}

function removeMinimizedView() {
  document.body.classList.remove('minimized');
}


// get initial state of options from storage for initial content
chrome.storage.local.get(
  { minimizedViewShow: true, shortcutsMenuShow: true },
  (result) => {
    const contentModule = document.getElementById(app.id);
    
    // show shortcut menu based on options in storage
    if (result.shortcutsMenuShow) {
      contentModule.style.visibility = 'visible';
    } else {
      contentModule.style.visibility = 'hidden';
    }

    // show minimized view based on options in storage
    if (result.minimizedViewShow) {
      addMinimizedView();
    } else {
      removeMinimizedView();
    }
  }
);

// listen to changes in storage to change content on page
chrome.storage.onChanged.addListener((changes, namespace) => {

  const contentModule = document.getElementById(app.id);

  // toggle shortcut menu
  if ('shortcutsMenuShow' in changes) {
    if (changes.shortcutsMenuShow.newValue === true) {
      contentModule.style.visibility = 'visible';
    } else {
      contentModule.style.visibility = 'hidden';
    }

  // toggle minimized view
  } else if ('minimizedViewShow' in changes) {
    if (changes.minimizedViewShow.newValue === true) {
      addMinimizedView();
    } else {
      removeMinimizedView();
    }
  }
});