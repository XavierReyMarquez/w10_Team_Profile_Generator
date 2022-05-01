const Inter = require("../lib/Inter");

test("creates an Intern object", () => {
  const employee = new Inter("Xavier", "23", "test@email.com", "UW");

  expect(employee.name).toBe("Xavier");
  expect(employee.id).toBe("23");
  expect(employee.email).toBe("test@email.com");
  expect(employee.school).toBe("UW");
});

test("gets intern's school", () => {
  const employee = new Inter("Xavier", "23", "test@email.com", "UW");

  expect(employee.getSchool()).toEqual(
    expect.stringContaining(employee.school)
  );
});

test("gets intern role", () => {
  const employee = new Inter("Xavier", "23", "test@email.com", "UW");

  expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
});
