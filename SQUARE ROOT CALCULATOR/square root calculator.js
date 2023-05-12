// In VS Code, write a function that calculates the square root of a given number.
// If the input is a negative number, throw a custom error with an appropriate message.
// Use Try-Catch statements to handle the error gracefully and log the error message to the console.

//function that calculates square root of given number
const a = prompt("Please Enter a Number");
//declare inputed number
let result = Math.sqrt(a);
//try statement with relevant message
try {
  if (a < 0) {
    throw new Error("You cannot use a negative Number.");
  }
  //prints square root if it is not a negative number
  else {
    console.log("The Square Root is:", result);
  }
} catch (error) {
  console.log("An Error occured", error.message);
}
