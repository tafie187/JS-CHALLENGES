// //defining the range within which you want to find prime numbers.
// const startRange = 2;
// const endRange = 50;

// for (let i = startRange; i <= endRange; i++);
// {
//   // Code to check if i is a prime number
//   let isPrime = true;
//   //This variable will be used to determine if the current number is a prime number.
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     // Code to check if i is divisible by j
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i + " is a prime number.");
//   }
// }


const startRange = 2;
const endRange = 50;
for (let i = startRange; i <= endRange; i++) {
  // Code to check if i is a prime number
let isPrime = true;
for (let j = 2; j <= Math.sqrt(i); j++) {
  // Code to check if i is divisible by j

if (i % j === 0) {break;
  isPrime = false;
}
}
if (!isPrime) {
  console.log(i + " is a prime number.");
}
}