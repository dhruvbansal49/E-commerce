// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
require('./app.js');
let mainWindow;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({
    webPreferences: {
      height:600,
      width:800,
      webSecurity: false
    }
  });

  mainWindow.loadURL(`http://localhost:3000/`);
  mainWindow.on('close', event => {
    mainWindow = null
  })
  mainWindow.on('ready-to-show',()=>{
    mainWindow.show();
  })
});