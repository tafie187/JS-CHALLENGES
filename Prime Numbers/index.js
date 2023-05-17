// //defining the range within which you want to find prime numbers.
const startRange = 2;
const endRange = 50;

console.log(`The prime numbers between ${startRange} and ${endRange} are:`);

// looping from startRange to higherNumber
for (let i = startRange; i <= endRange; i++) {
    let flag = 0;

    // looping through 2 to endRange and High
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}