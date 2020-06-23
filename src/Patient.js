const db = require('./db');

class Patient {
  constructor(patientData) {
    this.fullName = patientData.fullName;
    this.expedient = patientData.expedient;
    this.admisionDate = patientData.admisionDate;
    this.birthDate = patientData.birthDate;
    this.age = patientData.age;
    this.sex = patientData.sex;
    this.marritalStatus = patientData.marritalStatus;
    this.city = patientData.city;
    this.address = patientData.address;
    this.phone = patientData.phone;
    this.cellPhone = patientData.cellPhone;
    this.activitites = patientData.activitites;
    this.dxPrimary = patientData.dxPrimary;
    this.dxInitial = patientData.dxInitial;
    this.background = patientData.background;
    this.surgicalHistory = patientData.surgicalHistory;
    this.dxFinal = patientData.dxFinal;
    this.txIntervencionism = patientData.txIntervencionism;
    this.createdAt = patientData.createdAt;
    this.updatedAt = patientData.updatedAt;
  }

  static async all() {
    return await db.patients.find({})
  }

  static async create(data) {
    const patient = await db.patients.insert(data)
    .then((patient) => {
      return patient;
    });
    return patient;
  }

  static async recent(){
    return await db.patients.find({}).sort({ updatedAt: 1}).limit(10)
  }
}

module.exports = Patient;
