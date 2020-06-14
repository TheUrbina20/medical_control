'use strict';

const { ipcRenderer } = require('electron');
import formToJSON from '../assets/javascript/utils.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('createUserForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToJSON(event.target.elements);
    ipcRenderer.send('create-user', data);
  });
});
