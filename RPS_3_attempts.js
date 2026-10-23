const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//declaring variable that will later be incremented
let user_score = 0;
let computer_score = 0;
let round = 0;
//then the computer randomises and output rock/paper/scissors
const array = ["rock", "paper", "scissors"]
const computersChoice = (array) => {
    const rIndex = Math.floor(Math.random() * array.length);
    let computer = array[rIndex];
    return computer;
}
let computer = computersChoice(array)
//Comparing the computer choice to user's input
const result = (choice, computer) => {
    
    if ((computer === 'rock' && choice === 'rock') || (computer === 'scissors' && choice === 'scissors') || (computer === 'paper' && choice === 'paper')) {
            // console.log('Draw');
        }
        else if ((computer === 'rock' && choice === 'paper') || (computer === 'paper' && choice === 'scissors') || (computer === 'scissors' && choice === 'rock') ) { 
            user_score += 1
            // console.log('You Win');
        }
        else if ((computer === 'paper' && choice === 'rock') || (computer === 'rock' && choice === 'scissors') || (computer === 'scissors' && choice === 'paper')) { 
            computer_score += 1
         // console.log('You lose');
    }
    }
//Declaring what the final results outcome will be after 3 rounds
function finalResult (user_score, computer_score){
    if (user_score > computer_score){
        console.log("You are the winner!")
    }
    else if (user_score < computer_score){
        console.log("You Lose!!!")
    }
    else { console.log("It's a draw!")}     
       
    }
//Playing the game with the user input
const playRound = () => {
    rl.question(`Enter your choice (rock/paper/scissors)`, choice => {
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        console.log(`Your choice is ${choice}!`);
        console.log(`Computer's choice is ${computer}!`);//
        // console.log (computersChoice(array));
        result(choice, computer)
                    round += 1;
            console.log(`Round: ${round}`);

            if (round < 3) {
                playRound();
            } else {
                finalResult(user_score, computer_score);
                rl.close();
            }
    }
    else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
    }  
})};

playRound()