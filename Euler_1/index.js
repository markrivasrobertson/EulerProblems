console.log('hooked up to the html');
console.log('Euler Problem 1');
console.log('my initial process was to run a for loop for all numbers less than a thousand.  Push them into an array.  Then run a forEach through that grabbing all the multiples of three and five.  Push them into an array.  Then add each number of that array into a single \' let variable.  That worked.  But on a refactor I realized that\'s a couple more steps than necessary.  I now just run the for loop through the numbers less than a thousand, and run a block of if code on it, adding to the variable \'answer\' any time i is a multiple of 3 or five.');
let answer = 0;
for (let i = 1; i < 1000; i++) {
  if (i%3===0 || i%5===0) {
      answer += i;
  };
};
console.log('alsoAnswer');
console.log(answer)
console.log('the answer');
const displayAnswer = document.createElement('h1');
displayAnswer.innerHTML = `${answer} is the answer`;
document.getElementById('root').appendChild(displayAnswer);



// const arrayOneToThousand = [];
// for (let i = 1; i < 1000; i++) {
//   arrayOneToThousand.push(i);
// };
// console.log(arrayOneToThousand);
// let answer = 0;
// arrayOneToThousand.forEach((number) => {
//   if (number%3===0 || number%5===0) {
//       answer += number;
//   };
// });
// const multiplesOfThreeOrFive = [];
// arrayOneToThousand.forEach((number) => {
//   if (number%3===0 || number%5===0) {
//     multiplesOfThreeOrFive.push(number);
//   };
// });
// console.log('multiplesOfThreeOrFive');
// console.log(multiplesOfThreeOrFive);
// console.log('now I\'ve just got to add them all together with another ');
