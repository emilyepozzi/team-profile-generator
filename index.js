const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Managers');
const Engineer = require('./lib/Engineers');
const Intern = require('./lib/Interns');
const Employee = require('./lib/Employees');

const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require("./src/page-template.js")
 
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamArray = []; 

// user prompts for code

const addManager = () => {
    return inquirer.prompt ([
        {

            type: 'input',
            name: 'name',
            message: 'What`s your name?', 
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
                    console.log ('Enter a valid work id')

                }}},
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the managers email.",

                    validate: nameInput => {
                        if (nameInput ) {
                            return true;
                        } else {
                            console.log ('Enter email!')
                        }}
                },
                {
                    type: 'input',
                    name: 'officenumber',
                    message: "Enter managers email.",
                    validate: nameInput => {

                        if (nameInput ) {
                            return true;

                        } else {
                            
                            console.log ('Enter an email!')
                        }}
                },
            ]);
}