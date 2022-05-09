const Manager = require("../lib/Manager");

test("should creates an Manager object", () => {
  const employee = new Manager("Xavier", "23", "test@email.com", "80");

  expect(employee.name).toBe("Xavier");
  expect(employee.id).toBe("23");
  expect(employee.email).toBe("test@email.com");
  expect(employee.officenumber).toBe("80");
});

test("should gets manager's office number", () => {
  const employee = new Manager("Xavier", "23", "test@email.com", "80");

  expect(employee.getOfficeNumber()).toEqual(
    expect.stringContaining(employee.officenumber.toString())
  );
});

test("should gets manager's role", () => {
  const employee = new Manager("Xavier", "23", "test@email.com", "80");

  expect(employee.getRole()).toEqual(expect.stringContaining("Manager"));
});
