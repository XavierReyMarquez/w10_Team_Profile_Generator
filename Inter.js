const Employee = require("./Employee");
// const Engineer = require("./Engineer");

class Inter extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Inter";
  }
}

module.exports = Inter;
