const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const generateSite = require('./src/generate-site.js');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID (Required)',
            validate: employeeId => {
                if (employeeId){
                    return true;
                }else {
                    console.log('Please enter your Employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address (Required)',
            validate: email => {
                if (email){
                    return true;
                }else {
                    console.log('Please enter your Email Address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Office Number (Required)',
            validate: officeNumber => {
                if (officeNumber){
                    return true;
                }else {
                    console.log('Please enter your Office Number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option:',
            choices: ['add an engineer', 'add an intern', 'finish building team']
        }])
        .then(userChoice => {
            switch (userChoice.menu){
                case "add an engineer":
                    promptEngineer();
                    break;
                    case "add an intern":
                    promptIntern();
                    break;
                    default:
                        buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    =============
    Add an engineer 
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }else{
                    console.log('Please enter the name of engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID (Required)',
            validate: employeeId => {
                if (employeeId){
                    return true;
                }else {
                    console.log('Please enter your Employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address (Required)',
            validate: email => {
                if (email){
                    return true;
                }else {
                    console.log('Please enter your Email Address!');
                    return false;
                }
            }
        },

    ])
}