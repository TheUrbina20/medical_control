'use strict'

const { BrowserWindow } = require('electron');
const defaultProps = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true
  }
}

class Window extends BrowserWindow {
  constructor({path, ...windowSettings}) {
    super({...defaultProps, ...windowSettings});
    this.loadURL(path);
    this.webContents.openDevTools();
    this.once('ready-to-show', () => {
      this.show();
    });
  }
}

module.exports = Window;
