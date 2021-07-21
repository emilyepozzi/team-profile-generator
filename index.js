const generateHTML = require('./src/generateHTML');

const Manager = require('./js/Managers');
const Engineer = require('./js/Engineers');
const Intern = require('./js/Interns');
const Employee = require('./js/Employees');

const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require("./src/page-template.js")
 
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamArray = []; 

// using user prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your name');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID')
                }}},
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the manager's email.",
                    validate: nameInput => {
                        if (nameInput ) {
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officenumber',
                    message: "Please enter the manager's email.",
                    validate: nameInput => {
                        if (nameInput ) {
                            return true;
                        } else {
                            console.log ('Please enter an email!')
                        }
                    }
                },
        
        
            ]);
        }