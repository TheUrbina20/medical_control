function buildContent(patientData) {
  return '<div>'
          + `<p>${patientData.fullName}</p>`
        +'</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const patientId = params.get('patientId')
  ipcRenderer.send('find-patient', patientId);
  ipcRenderer.on('patient-found', (_event, patientData) => {
    // TODO: build html patient container
    // patientContainer.innerHTML(buildContent(patientData))
  })
});
