'use strict';

const { app, ipcMain } = require('electron')
const Window = require('./Window');
const Patient = require('./src/Patient')

function main() {
  new Window({
    file: './public/views/index.html',
  })

  ipcMain.on('create-patient', (event, data) => {
    Patient.create(data).then((patient) => {
    })
  })
}

app.on('ready', main);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
