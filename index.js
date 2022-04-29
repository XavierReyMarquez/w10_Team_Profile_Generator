const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./manager");
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

const promptEmployee = (managerdata) => {};

PromptManager();
