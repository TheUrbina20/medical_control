'use strict';

const { ipcRenderer } = require('electron');
const moment = require('moment');
moment.locale('es')

function patientUpdate(patient) {
  return moment(patient.updatedAt, 'YYYMMDD').fromNow();
}

function buildPatientsRow(patient) {
  return '<div class="columns is-12 is-flex">'
          +'<div class="column">'
            + `<a href="/patient/${patient._id}">${patient.fullName}</a>`
          + '</div>'
          +'<div class="column">'
            + `<div class="has-text-right is-size-6">${patientUpdate(patient)}</div>`
          + '</div>'
        +'</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('request-recent-patients');
  ipcRenderer.on('recent-patient', (_event, patientsData) => {
    const recentPatientsContainer = document.getElementById('recentPatientsContainer');
    patientsData.forEach((patient) => {
      recentPatientsContainer.insertAdjacentHTML('beforeEnd', buildPatientsRow(patient))
    })
  });
});
