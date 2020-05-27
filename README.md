# 🧙‍♂️Gmail Wizard

> Gee Wiz! I didn't know decluttering my Gmail inbox could be so easy!


## About
A simple chrome extension meant for you to declutter your Gmail's UI, learn Gmail's best keyboard shortcuts, and be breezing through your inbox like magic. With a quick shortcut to show the most helpful keyboard shortcuts, you can quickly learn shortcuts that will teach you to rarely touch your mouse all while speeding through emails. Our Chrome Extension also modifies the UI of Gmail, to be much more clean and easy to read.


## Screenshots
![image](https://user-images.githubusercontent.com/22362476/82965372-eccca700-9f95-11ea-939f-a12178210d9d.png)


![image](https://user-images.githubusercontent.com/22362476/82965394-fb1ac300-9f95-11ea-9aff-a19fa1d7ab4a.png)


## Installation
1. Clone or download this repository
2. Run `npm install` to download necessary components
3. Run `npm start` to compile, run the hot server, and generate the `Build` folder.
4. Go to `chrome://extensions/` in your Chrome browser.
5. Make sure you have Developer Mode enabled in your extensions.
6. Click `Load unpacked` button and open the `Build` folder.
7. Use chrome extension by going to [mail.google.com](https://mail.google.com/), toggle `Cmd/Ctrl + Shift + Y` to open shortcuts menu and click on the GWiz icon in the Extensions bar for more options.
  - Make sure you have the default keyboard shortcuts already enabled on Gmail in the settings.

## Build Details

I built this extension using this great [React Chrome Extension boilerplate by lxieyang](https://github.com/lxieyang/chrome-extension-boilerplate-react). It was probably overkill to use React and Webpack on a simple extension, but I enjoyed the modularity of using React. I used [Figma](https://www.figma.com/) for quick designs.


This extension is inspired by the existing Chrome Extension [Simplify by leggett](https://github.com/leggett/simplify) and by the email app [Superhuman](https://superhuman.com/). 

---

Built out of boredom and for the desire for people not to overpay on email clients. I need to learn the keyboard shortcuts too. Don't worry, I dont save any email data, all the code is purely frontend with no interaction to a backend server. All inquiries, concerns, feedback can go to my email teresali@usc.edu. For bugs, please submit a Github issue or email me. Enjoy!
