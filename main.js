'use strict';

const { app, ipcMain, Notification } = require('electron')
const Window = require('./app/src/Window');
const Patient = require('./app/src/Patient')

function main() {
  const mainWindow = new Window({
    file: './app/public/views/index.html',
  })
  mainWindow.setFullScreen(true);

  ipcMain.on('create-patient', (event, data) => {
    Patient.exists(data.fullName)
    .then((patientAlreadyExists) => {
      if (patientAlreadyExists) {
        new Notification({
          title: 'Error registrando paciente',
          body: 'Ya existe un paciente registrado con el nombre ingresado.'
        }).show();
      } else {
        Patient.create(data)
        .then((patient) => {
          new Notification({
            title: 'Paciente registrado',
            body: 'Los datos han sido correctamente registrados.'
          }).show();
          mainWindow.loadURL(`file:${__dirname}/public/views/index.html`)
        });
      }
    })
  })

  ipcMain.on('request-recent-patients', (event, data) => {
    Patient.recent()
    .then((response) => {
      event.reply('recent-patient', response)
    })
  });

  ipcMain.on('check-if-patient-exists', (event, data) => {
    Patien.exists(data)
    .then((response) =>{
      event.reply('patient-exists', response)
    });
  });
}

app.on('ready', main);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
