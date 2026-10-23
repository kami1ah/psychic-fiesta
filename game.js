//Write a function where you input rock/paper/scissors
// const prompt = require('prompt-sync')();
// let choice = prompt("Enter your choice")

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Enter your choice (rock/paper/scissors)?\n`, choice => {
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        console.log(`Your choice is ${choice}!`);

        // console.log (computersChoice(array));
        result(choice, computer)
        //if (choice === )
    }
    else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }  
  rl.close();
});

//then the computer randomises and output rock/paper/scissors
const array = ["rock", "paper", "scissors"]
let computer
const computersChoice = (array) => {
    const rIndex = Math.floor(Math.random() * array.length);
    computer = array[rIndex];
    return computer;
}

// console.log (computersChoice(array)); //was console loging the computer's choice and injecting itself after the question.

//compare and see which wins 
const result = (choice, computer) => {
    if (computer === 'rock' && choice === 'rock') {
        console.log('Draw');
    }
    else { 
        console.log('You lose');
    }
}

//console log the winner 

//3 tries and see the majority winner.