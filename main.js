import chalk from "chalk";
import inquirer from "inquirer";
console.log("wellcome to my advanture quiz game:");
console.log("you are required to gain maximum 05/06 points for the win!...");
let point = 0;
// question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "Which data type is used to store numbers in programming?",
        choices: ["string", "boolean", "number", "float"],
    },
]);
if (question1.one == "number") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
//  question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "What is the data type of the variable name in the following code: let name = John?",
        choices: ["string", "boolean", "number", "void"],
    },
]);
if (question2.two == "string") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
//  quention 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "Which variable declaration allows a value to be changed later in the code?",
        choices: ["let", "class", "const", "static"],
    },
]);
if (question3.three == "let") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
//  quention 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "What is the data type of the variable age in the following code: let age = 25?",
        choices: ["let ", "number", "string", "const"],
    },
]);
if (question4.four == "number") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
//  quention 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "Which data type is used to represent true or false values in most programming languages?",
        choices: ["integer ", "float", "string", "boolean"],
    },
]);
if (question5.five == "boolean") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
//  quention 6
let question6 = await inquirer.prompt([
    {
        name: "six",
        type: "list",
        message: "Which code is using type annotation?",
        choices: [
            "const myMessage = Hello World; ",
            "const myMessage: string = Hello World;",
            "console.log(Hello World);",
            "All of these",
        ],
    },
]);
if (question6.six == "const myMessage: string = Hello World;") {
    console.log("you answer is correct");
    point++;
}
else {
    console.log("answer incorrect");
}
console.log(chalk.bold.italic(question1.message));
//
if (point >= 5) {
    console.log("congratulations!..");
    console.log(chalk.bold.red.italic(point));
    console.log(`your points is ${point}`);
}
else {
    console.log("you loss! try next time");
}
