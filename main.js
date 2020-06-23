'use strict';

const { app, ipcMain } = require('electron')
const Window = require('./Window');
const Patient = require('./src/Patient')

function main() {
  const mainWindow = new Window({
    file: './public/views/index.html',
  })

  ipcMain.on('create-patient', (event, data) => {
    Patient.create(data).then((patient) => {
      mainWindow.loadURL(`file:${__dirname}/public/views/index.html`)
    })
  })

  ipcMain.on('request-recent-patients', (event, data) => {
    Patient.recent()
    .then((response) => {
      event.reply('recent-patient', response)
    })
  });
}

app.on('ready', main);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
