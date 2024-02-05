//1. Print all even numbers from 0 to 100.

// for(let i = 0; i <= 100; i += 2){
//     console.log("even numbers",i);
// };

// for (let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log("even numbers",i);
//     }
// }

//2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;

// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess again: ");
// }
// console.log("Congratulations, you entered the right number");


//3. Prompt the user to enter their full name. Generate a username for them based on the input.
//eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”

// let fullName = prompt("Enter your name without spaces: ");
// let lowName = fullName.toLowerCase()
// let userName = "@" + lowName + fullName.length
// console.log(userName);