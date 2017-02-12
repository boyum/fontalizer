const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');

let win;

// const template = [{
//     label: 'File',
//     submenu: [{
//         label: 'Open...',
//         accelerator: 'CmdOrCtrl+O',
//         click() {
//           openFile()
//         }
//       },
//       {
//         label: 'Save',
//         accelerator: 'CmdOrCtrl+S',
//         click() {
//           saveFile()
//         }
//       }
//     ]
//   },
//   {
//     label: 'Edit',
//     submenu: [{
//         label: 'Undo',
//         accelerator: 'CmdOrCtrl+Z',
//         role: 'undo'
//       },
//       {
//         label: 'Redo',
//         accelerator: 'Shift+CmdOrCtrl+Z',
//         role: 'redo'
//       },
//       {
//         type: 'separator'
//       },
//       {
//         label: 'Cut',
//         accelerator: 'CmdOrCtrl+X',
//         role: 'cut'
//       },
//       {
//         label: 'Copy',
//         accelerator: 'CmdOrCtrl+C',
//         role: 'copy'
//       },
//       {
//         label: 'Paste',
//         accelerator: 'CmdOrCtrl+V',
//         role: 'paste'
//       },
//       {
//         label: 'Select All',
//         accelerator: 'CmdOrCtrl+A',
//         role: 'selectall'
//       }
//     ]
//   },
//   {
//     label: 'Developer',
//     submenu: [{
//       label: 'Toggle Developer Tools',
//       accelerator: process.platform === 'darwin' ?
//         'Alt+Command+I' : 'Ctrl+Shift+I',
//       click() {
//         win.webContents.toggleDevTools()
//       }
//     }]
//   }
// ]

function createWindow() {
  win = new BrowserWindow({
    show: false
  });
  win.maximize();

  win.once('ready-to-show', () => {
    win.show();
  });



  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, './index.html'),
  //   protocol: 'file',
  //   slashes: true
  // }));

  win.loadURL('file://' + __dirname + '/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});