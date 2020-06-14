const db = require('./db');

class Patient {
  constructor(patientData) {
    this.fisrtName = patientData.fisrtName;
    this.email = patientData.email;
    this.createdAt = patientData.createdAt;
    this.updatedAt = patientData.updatedAt;
  }

  static async all() {
    return await db.patients.find({})
  }

  static async create(data) {
    const patientData = await db.patients.insert(data)
    return new Patient(patientData);
  }
}

module.exports = Patient;
