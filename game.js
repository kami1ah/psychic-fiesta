//Write a function where you input rock/paper/scissors
// const prompt = require('prompt-sync')();
// let choice = prompt("Enter your choice")
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Enter your choice (rock/paper/scissors)?`,name => {
    if (name == "rock" || name == "paper" || name == "scissors") {
        console.log(`Your choice is ${name}!`);

        if (name === )
    }
    else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }  
  rl.close();
});

//then the computer randomises and output rock/paper/scissors

//function to compare and see which wins 

//console log the winner 

//3 tries and see the majority winner.