#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n\t Welcome to currency-Converter machine of Muhammad Khubaib\n"));
// Defining the different currencies and their exchange rate
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JPY": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
    //Add more currencies and exchange rates here
};
//Promt the to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//Performing currency conversuion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Displaying the converted amount
console.log(`Converted amount = ${chalk.magenta(converted_amount.toFixed(2))}`);
