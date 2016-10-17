// function findBiggest() {
//   const biggest = 999*999;
//   return biggest;
// }
//
// const consoledBiggest = findBiggest();
// console.log(consoledBiggest);

const thePalindromes = [];
for (let i = 0; i < 998001; i++) {
// for (let i = 0; i < 1002; i++) {
  let stringI = `${i}`;
  let splitArray = stringI.split('');
  let reversedArray = splitArray.reverse();
  let joinedReversedArray = reversedArray.join('');
  if (stringI===joinedReversedArray) {
    thePalindromes.push(stringI);
  }
}

const indexOfLast = thePalindromes.length-1;
const answer = thePalindromes[indexOfLast];
const displayAnswer = document.createElement('h1');
displayAnswer.innerHTML = `${answer} is the answer`;
document.getElementById('root').appendChild(displayAnswer);
