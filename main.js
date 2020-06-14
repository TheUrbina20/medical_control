'use strict';

const { app, ipcMain } = require('electron')
const Window = require('./Window');
const User = require('./src/User')

function main() {
  new Window({
    file: './public/sections/index.html',
  })
}

app.on('ready', main);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
