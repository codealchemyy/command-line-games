const playerMove = process.argv.slice(2)[0];

const moves = ['rock', 'paper', 'scissors'];
let randomMove = Math.floor(Math.random() * moves.length)
//Math.random() generates a random decimal number between 0 and 1
//Math.random() * moves.length => multiplies 3 with math.random()
//Math.floor() keeps the whole number (rounds down)

const computerMove = moves[randomMove] // computers move, picks randomly one of the moves



if (!playerMove) {
    console.log("Please provide your move! Rock, Paper or Scissors");

} else {
    console.log(`Your choose: ${playerMove}`)
}


if (computerMove) {
    console.log(`The computers choose: ${computerMove}`)
}

if (playerMove === computerMove) {
    console.log(`It's a draw!`)  
} else if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
    console.log(`You win!`)
} else {
    console.log(`The computer wins!`)
}
