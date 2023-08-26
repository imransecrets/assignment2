// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name : "number",
        type : "number",
        message : "Please typ a number : "
    }
])

if (answer.number > 0){
    console.log (answer.number, " number is positive");
} else if (answer.number < 0) {
    console.log (answer.number, " number is negative ");
} else {
    console.log (answer.number, " number is zero");
}