const keyboardShortcutsData = [
  {
    title: 'Navigating the Mailbox',
    description: 'Works within the Mailbox',
    shortcuts: [
      { action: 'Go to search bar', 'keys': '/' },
      { action: 'Select conversation', 'keys': 'x' },
      { action: 'Go to next page', 'keys': 'g + n' },
      { action: 'Go to previous page', 'keys': 'g + p' },
      { action: 'Newer conversation', 'keys': 'k' },
      { action: 'Older conversation', 'keys': 'j' },
      { action: 'Open conversation', 'keys': 'o or Enter' },
      { action: 'Back to mailbox', 'keys': 'u' },
    ]
  },
  {
    title: 'Actions for Selected Conversations',
    description: 'Works with both opened email conversations and with selection conversations in Mailbox',
    shortcuts: [
      { action: 'Toggle stars', 'keys': 's' },
      { action: 'Archive', 'keys': 'e' },
      { action: 'Mute conversation', 'keys': 'm' },
      { action: 'Report as spam', 'keys': '!' },
      { action: 'Delete', 'keys': '#' },
      { action: 'Mark as read', 'keys': 'Shift + i' },
      { action: 'Mark as unread', 'keys': 'Shift + u' },
      { action: 'Mark as important', 'keys': '+ or =' },
      { action: 'Mark as not important', 'keys': '-' },
      { action: 'Snooze', 'keys': 'b' },
      { action: 'Label as', 'keys': 'l' },
      { action: 'Move to', 'keys': 'v' },
      { action: 'Undo', 'keys': 'z' },
    ]
  },
  {
    title: 'Actions for Opened Conversations',
    description: 'Works when viewing an individual email conversation',
    shortcuts: [
      { action: 'Reply', 'keys': 'r' },
      { action: 'Reply in new window', 'keys': 'Shift + r' },
      { action: 'Reply all', 'keys': 'a' },
      { action: 'Reply all in new window', 'keys': 'Shift + a' },
      { action: 'Forward', 'keys': 'f' },
      { action: 'Forward in a new window', 'keys': 'Shift + f' },
      { action: 'Archive conversation and going to previous/next', 'keys': '] or [' },
      { action: 'Undo recent action', 'keys': 'z' },
      { action: 'Expand entire conversation', 'keys': ';' },
      { action: 'Collapse entire conversation', 'keys': ':' },
      { action: 'Previous message in conversation', 'keys': 'p' },
      { action: 'Next message in conversation', 'keys': 'n' },
    ]
  },
  {
    title: 'Composing New Emails',
    description: '',
    shortcuts: [
      { action: 'Compose', 'keys': 'c' },
      { action: 'Compose in new tab', 'keys': 'd' },
      { action: 'Close compose window', 'keys': 'esc' },
      { action: 'Send', 'keys': 'Cmd/Ctrl + Enter' },
      { action: 'Add cc recipients', 'keys': 'Cmd/Ctrl + Shift + c' },
      { action: 'Add bcc recipients', 'keys': 'Cmd/Ctrl + Shift + b' },
      { action: 'Advance to next chat/compose window', 'keys': 'Ctrl + .' },
      { action: 'Advance to previous chat/compose window', 'keys': 'Ctrl + ,' },
      { action: 'Forward in a new window', 'keys': 'Shift + f' },
    ]
  },
  {
    title: 'Jumping',
    description: '',
    shortcuts: [
      { action: 'Go to Inbox', 'keys': 'g + i' },
      { action: 'Go to Starred conversations', 'keys': 'g + s' },
      { action: 'Go to Snoozed conversations', 'keys': 'g + b' },
      { action: 'Go to Sent conversations', 'keys': 'g + t' },
      { action: 'Go to Drafts conversations', 'keys': 'g + d' },
      { action: 'Go to All Mail', 'keys': 'g + a' },
    ]
  },
  {
    title: 'Formatting Text in Emails',
    description: '',
    shortcuts: [
      { action: 'Insert a link', 'keys': 'Cmd/Ctrl + k' },
      { action: 'Bold', 'keys': 'Cmd/Ctrl + b' },
      { action: 'Italic', 'keys': 'Cmd/Ctrl + i' },
      { action: 'Underline', 'keys': 'Cmd/Ctrl + u' },
      { action: 'Numbered List', 'keys': 'Cmd/Ctrl + Shift + 7' },
      { action: 'Bulleted List', 'keys': 'Cmd/Ctrl + Shift + 8' },
      { action: 'Quote', 'keys': 'Cmd/Ctrl + Shift + 9' },
      { action: 'Indent', 'keys': 'Cmd/Ctrl + ]' },
      { action: 'Un-indent', 'keys': 'Cmd/Ctrl + [' },
      { action: 'Align left', 'keys': 'Cmd/Ctrl + l' },
      { action: 'Align center', 'keys': 'Cmd/Ctrl + e' },
      { action: 'Align right', 'keys': 'Cmd/Ctrl + r' },
      { action: 'Remove formatting', 'keys': 'Cmd/Ctrl + \\' },
    ]
  }
]

export default keyboardShortcutsData;