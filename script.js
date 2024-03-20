// if (condition)
//   statement1

// // With an else clause
// if (condition)
//   statement1
// else
//   statement2


// let a = prompt('What is the "official" name of JavaScript?', '');

// if (a === 'ECMAScript'){
// alert('Right!');
// } else {
// alert('You don’t know? ECMAScript!');
// }

// ------------------------------------------

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.


// if (condition1)
//   statement1
// else if (condition2)
//   statement2
// else if (condition3)
//   statement3
// // …
// else
//   statementN

  
// let value = prompt('Indicate your integer', '');

// if (value > 0){
//     alert(1);
// } else if (value < 0){
//     alert(-1);
// } else {
//     alert(0);
// }

// ------------------------------------------

// Rewrite this if using the conditional operator '?':

// condition ? expression1 : expression2

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// Result
// let result = (a + b < 4) ? 'Below' : 'Over';

// ------------------------------------------

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// var yourVar = condition1 ? someValue
//             : condition2 ? anotherValue
//             : defaultValue;



// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello'
// : (login == 'Director') ? 'Greetings'
// : (login == '') ? 'No login'
// : '';


// ------------------------------------------


// let value = prompt(` What's the "official" name of JavaScript? `, '');

// if (value == 'ECMAScript'){
//   alert('Right!');
// } else {
//   alert('You don’t know? ECMAScript!');
// }


// let a = prompt('What is the "official" name of JavaScript?', '');

// if (a === 'ECMAScript'){
// alert('Right!');
// } else {
// alert('You don’t know? ECMAScript!');
// }

// alert(1) = >0
// alert(-1) = <0
// alert(0) = 0

// let value = prompt('Type your number you vile piece of shit: \n', '');

// if (value > 0){
//   alert(1)
// }  else if (value < 0 ) {
//   alert(-1)
// } else {
//   alert(0)
// }


// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';


// Check the range between
// importance: 3
// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

// my proposed monstrosity: 
// let age = prompt('Enter your number: \n', '');
// let value = (age <= 13) ? 'You cannot enter our cult' :
// (age <= 90) ? 'I knew you-d finally come home, my lost Brethren' :
// (age >= 91) ? 'You should be dead' :
// 'Please enter a valid age';
// console.log(value);

// the actual result
// if (age >= 14 && age <= 90)


// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.


// if (!(age >= 14 && age <= 90))

// if (age < 14 || age > 90) 


// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''. 
// Pressing ESC during a prompt returns null.

// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';



// let name = (login == '') ? 'Canceled' :
// (login == 'Admin') ? prompt('What is your password?', ''):
// ()


// 'Canceled' / Other / 'Admin'




// let login = prompt('Enter your login: \n', '');

// if (login === 'Admin'){
//  let drop = prompt('What is your password?', '');
//                       if (drop = 'TheMaster'){
//                         console.log('Welcome!');
//                       }  else if (drop = null) {
//                         console.log('Canceled');
//                       } else if (drop == '') {
//                         console.log('Canceled');
//                       } else {
//                         console.log('Wrong password');
//                       }

// } else if (login == null) {
//   console.log('Canceled');
// } else if (login == ''){
//   console.log('Canceled');
// }
// else {
//   console.log('I don-t know you');
// }

// let login = prompt('Enter your login: \n', '');

//   if (login === 'Admin') {
//     let password = prompt('What is your password?', '');

//     if (password === "TheMaster") {
//       console.log('Welcome!');
//     } else if (password === null || password === ''){
//       console.log('Canceled');
//     } else {
//       console.log('Wrong password');
//     }
//   } 

// else if (login === null || login === '') {
//   console.log('Canceled');
// } else {
//   console.log("I don't know you");
// }




// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }


// let login = prompt('Enter your login: ', '');
// if (login === 'Admin'){
//   let password = prompt('Enter your password: ', '');
//   if (password === 'TheMaster'){
//     console.log('Welcome!');
//   } else if (password === '' || password === null){
//     console.log('Canceled');
//   } else {
//     console.log("Wrong person");
//   }
    
// } else if (login === '' || login === null){
// console.log('Canceled');
// } else {
//   console.log("I don't know you");
// }




// Rewrite the function using '?' or '||'
// importance: 4
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||
// solution

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

// The syntax is:

// let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

// For example:

// let accessAllowed = (age > 18) ? true : false;
// Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

// This example will do the same thing as the previous one:

// // the comparison operator "age > 18" executes first anyway
// // (no need to wrap it into parentheses)
// let accessAllowed = age > 18 ? true : false;


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// function checkAge(age){
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }


// Function min(a, b)
// importance: 1
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function calcMin(a,b) {
//   // Check if a and b are numbers
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('Both parameters must be numbers');
//   }

//   return (a > b) ? a : b;
// }


// Function pow(x,n)
// importance: 4
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// P.S. In this task the function should support only natural values of n: integers up from 1.

// XXXX Power null is not supported, use a positive integer


let x = prompt('x?');
let n = prompt('n?');

// function pow(x,n){
//   alert(Math.pow(x, n) || 'Power null is not supported, use a positive integer');
// }

function sum(x,n){
  window.alert(x+n);
}




















