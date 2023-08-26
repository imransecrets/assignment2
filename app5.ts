// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
import inquirer from "inquirer";

let answer = await inquirer.prompt ([
    {
        name: "number",
        type: "number",
        message: "Enter the age of Person: "
    }
])

if (answer.number >= 18){
    console.log ("The person is iligible for casting vote")
} else { 
    console.log ("The person is not iligible for casting vote")
}