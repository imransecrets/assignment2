// Exercise 2: Write a program that takes input and calculates the volume of a cube.
import inquirer from "inquirer";

let answer = await inquirer.prompt ([
    {
        name : "length",
        type : "number",
        message : "Enter the side length of Cube: "
    }
])

console.log ("The volume of the cube is :", answer.length **3)