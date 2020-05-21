import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');


chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});