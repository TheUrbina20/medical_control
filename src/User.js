const db = require('./db');

class User {
  constructor(userData) {
    this.fisrtName = userData.fisrtName;
    this.email = userData.email;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
  }

  static async all() {
    return await db.users.find({})
  }

  static async create(data) {
    const userData = await db.users.insert(data)
    return new User(userData);
  }
}

module.exports = User;
