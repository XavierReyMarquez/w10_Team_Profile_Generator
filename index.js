const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");

const Inter = require("./lib/Inter");
const Manager = require("./lib/manager");
const Engineer = require("./Employee");
// create manager function
const PromptManager = () => {
  // put inquirer prompt to get info
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "what is the managers name?",
        },
        {
          type: "input",
          name: "id",
          message: "what is the managers ID?",
        },
        {
          type: "input",
          name: "email",
          message: "what is the managers email?",
        },
        {
          type: "input",
          name: "officeNum",
          message: "what is the managers office number?",
        },
      ])
      // in the .then get results
      .then((managerdata) => {
        console.log(managerdata);
        const { name, id, email, officeNum } = managerdata;
        // used manger class and result to create new varaible
        employee = new Manager(name, id, email, officeNum);
        let role = { role: "Manager" };
        // push to globe array
        return { ...managerdata, ...role };
      })
  );
};

const promptEmployee = (managerdata) => {
  if (!managerdata.engineers) {
    managerdata.engineers = [];
  }
  if (!managerdata.inters) {
    managerdata.inters = [];
  }
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "would you like to add an Engineer, an intern, or finish you list",
        choices: ["Engineer", "Inter", "Finished"],
      },
    ])
    .then(({ role }) => {
      if (role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "whats the Engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "what is the Engineer's ID?",
            },
            {
              type: "input",
              name: "email",
              message: "what is the Engineer's email?",
            },
            {
              type: "input",
              name: "github",
              message: "what is the Engineer's Github username?",
            },
          ])
          .then((employeeData) => {
            console.log(employeeData);
            employee = new Engineer(
              employeeData.name,
              employeeData.id,
              employeeData.email,
              employeeData.github
            );
            let role = { role: "Engineer" };
            managerdata.engineers.push({ ...employeeData, ...role });
            return promptEmployee(managerdata);
          });
      } else if (role === "Inter") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "whats the Inter's name?",
            },
            {
              type: "input",
              name: "id",
              message: "what is the Inter's ID?",
            },
            {
              type: "input",
              name: "email",
              message: "what is the Inter's email?",
            },
            {
              type: "input",
              name: "School",
              message: "what is the Inter's School?",
            },
          ])
          .then((employeeData) => {
            console.log(employeeData);
            employee = new Inter(
              employeeData.name,
              employeeData.id,
              employeeData.email,
              employeeData.school
            );
            let role = { role: "Inter" };
            managerdata.inters.push({ ...employeeData, ...role });
            return promptEmployee(managerdata);
          });
      } else {
        return managerdata;
      }
    });
};

PromptManager().then(promptEmployee);
