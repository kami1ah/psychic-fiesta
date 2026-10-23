//Write a function where you input rock/paper/scissors
// const prompt = require('prompt-sync')();
// let choice = prompt("Enter your choice")
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Enter your choice (rock/paper/scissors)?`, choice => {
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        console.log(`Your choice is ${choice}!`);

        if (choice === )
    }
    else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }  
  rl.close();
});

//then the computer randomises and output rock/paper/scissors
const array = ["rock", "paper", "scissors"]

function computersChoice (array){
    const rIndex = Math.floor(Math.random() * array.length);
    return array[rIndex];
}

console.log (computersChoice(array));
//function to compare and see which wins 

//console log the winner 

//3 tries and see the majority winner.