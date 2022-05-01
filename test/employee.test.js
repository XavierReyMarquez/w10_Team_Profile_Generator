const Employee = require("../lib/Employee");

test("should creates an employee object", () => {
  const employee = new Employee("Xavier", "23", "test@email.com");

  expect(employee.name).toBe("Xavier");
  expect(employee.id).toBe("23");
  expect(employee.email).toBe("test@email.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Xavier", "23", "test@email.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee's ID Name", () => {
  const employee = new Employee("Xavier", "23", "test@email.com");

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee's role", () => {
  const employee = new Employee("Xavier", "23", "test@email.com");

  expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});

module.exports = Employee;
