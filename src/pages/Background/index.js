import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');


// // when the PipelineLinker extension is triggered
// chrome.pageAction.onClicked.addListener(function (browserTab) {
//     // execute the script that gets injected into page of the current tag
//     chrome.tabs.executeScript(null, {file: "js/content.js"}, function () {
//         // send a message to content script
//         chrome.tabs.sendMessage(browserTab.id, "Background page started.", function (response) {
//             // receive the HTML from the tab's page and convert it to a DOM Document
//              console.log("hellloooooo background")
//         });
//     });
// });

// 
chrome.commands.onCommand.addListener(function (command) {
  console.log("Background: ", command)
  if (command === 'toggle-help') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("sending message to tab:", tabs[0].id)
        chrome.tabs.sendMessage(tabs[0].id, {action: command});
    });
  }
})

// only enable the extension on Gmail
chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: "mail.google.com"},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});