'use strict';

const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('request-recent-patients');
  ipcRenderer.on('recent-patient', (event, args) => {
  });
});
