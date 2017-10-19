//create secret number
let secretNumber = 4;


//ask user for guess
let guess = Number(prompt("Guess a number"));


//check if guess is right
if (guess === secretNumber) {
    alert("You got it right!");
}

//check if guess is higher
else if (guess > secretNumber) {
    alert("Guess is too high, guess again!");
}

else {
    alert("Guess is too low");
}