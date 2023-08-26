// Exercise 4:   Write a program that checks if a given number is even or odd.
import inquirer from "inquirer";

let answer = await inquirer.prompt ([
    {
        name : "number",
        type : "number",
        message : "Please give a number to check whether it is even or odd : "

    }
])

if (answer.number%2 == 0 ){
    console.log (answer.number, "is an even number")
} else if (answer.number%2 == 1){
    console.log (answer.number, "is an odd number")
} 