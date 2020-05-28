import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');

// add in keyboard shortcut to toggle keyboard shortcuts menu
chrome.commands.onCommand.addListener((command) => {
  if (command === 'command-toggle-shortcut-menu') {
    // send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: command });
    });
    // send message to popup
    chrome.runtime.sendMessage({ action: command });
    
    // save shortcut menu visibility based on command
    chrome.storage.local.get({'shortcutsMenuShow' : false}, (result) => {
      chrome.storage.local.set({'shortcutsMenuShow': !result.shortcutsMenuShow});
    });
  }
});

// only enable the extension on Gmail
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'mail.google.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});