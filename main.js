//Set initial scores
let userScore = 0
let computerScore = 0

//Get result
let result = document.querySelector('.result')

//Get scorecards
let userScoreBox = document.querySelector('.player_scorebox')
let computerScoreBox = document.querySelector('.bot_scorebox')

//Get reset button
let reset = document.querySelector('.reset')

//Get users choice
let userChoices = document.querySelectorAll('.choice')


//Add event listener to reset button
reset.addEventListener('click', resetScore)


//Add event listener to each choice
userChoices.forEach(choice => {
    choice.addEventListener('click', playGame)
})



//Randomized computer function to choose rock, paper, or scissors
function computerPlayer(){
    let randomNumber = Math.floor((Math.random()*3)+1)
    let computerChoice
    if(randomNumber == 1){
        return (computerChoice = 'rock')
    } else if(randomNumber == 2){
        return (computerChoice = 'scissors')
    } else{
        return (computerChoice = 'paper')
    }
}


//Play the game
function playGame(){

    //Get user choice
    let userChoice
    if(this.classList.contains('rock')){
        userChoice = 'rock'
    } else if(this.classList.contains('paper')){
        userChoice = 'paper'
    } else{
        userChoice = 'scissors'
    }


    //Compare user choice to computer's
    if((userChoice == 'rock' && computerPlayer() == 'scissors') ||  
       (userChoice == 'paper' && computerPlayer() == 'rock') || 
       (userChoice == 'scissors' && computerPlayer() == 'paper')){
           userScore++
           result.innerHTML = 'You\'re a winner!' 
           userScoreBox.innerHTML = userScore

       } else if((computerPlayer() == 'rock' && userChoice == 'scissors') ||  
       (computerPlayer()  == 'paper' && userChoice == 'rock') || 
       (computerPlayer()  == 'scissors' && userChoice == 'paper')){
           computerScore++
           result.innerHTML = 'You\'re a loser!' 
           computerScoreBox.innerHTML = computerScore
       } else{
           result.innerHTML = 'You\'ve tied!' 
       }
}

//Reset score
function resetScore(){
    userScore = 0;
    computerScore = 0;
    userScoreBox.innerHTML = userScore
    computerScoreBox.innerHTML = computerScore
    result.innerHTML = ''
}