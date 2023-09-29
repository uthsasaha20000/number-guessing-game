var button= document.getElementById('button');
button.addEventListener("click",guess);

function guess(e){
 //need to be fixed 
let low = 1;
let high = 10;
const randomValue = parseInt(Math.random() * (high - low + 1) + low);

for (let i = 2; i >= 0; i--) {
    let user_guess = parseInt(prompt("Guess a number between 1 and 10:"));
    // Use parseFloat to convert the user input to a number

    if (user_guess === randomValue) {
        alert("You Win. It is Correct guess");
        return; // Exit the loop when the guess is correct
    } else if (user_guess < randomValue) {
        alert("Number is lesser than the correct answer. Remaining chance: "+i);
    } else if (user_guess > randomValue) {
        alert("Number is greater than the correct answer. Remaining chance: "+i);
    }
}

alert("You Lose. correct answer was " + randomValue);

e.target.disabled = true;//need to be corrected

}
