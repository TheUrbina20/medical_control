'use strict';

const { ipcRenderer } = require('electron');
import formToJSON from '../utils.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('createPatientForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToJSON(event.target.elements);
    ipcRenderer.send('create-patient', data);
  });
});
