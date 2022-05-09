const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const employee = new Engineer("Xavier", "23", "test@email.com", "Xavier");

  expect(employee.name).toBe("Xavier");
  expect(employee.id).toBe("23");
  expect(employee.email).toBe("test@email.com");
  expect(employee.githubUsername).toBe("Xavier");
});

test("gets employee github", () => {
  const employee = new Engineer("Xavier", "23", "test@email.com", "Xavier");

  expect(employee.getGithub()).toEqual(
    expect.stringContaining(employee.githubUsername)
  );
});

test("gets employee role", () => {
  const employee = new Engineer("Xavier", "23", "test@email.com", "Xavier");

  expect(employee.getRole()).toEqual(expect.stringContaining("Engineer"));
});
