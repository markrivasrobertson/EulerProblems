console.log('hooked up to the html');
console.log('the problem asks about prime factors, so first i\'ll need a primality test.');
console.log('i wrote a function that takes a number as an argument.  it then runs a for loop letting i = the argument minus one, and running as long as i > 1, decrementing by one with each step.  If any of the i\'s are such that num%i===0 then the function returns false, having found a number that the original parameter of the function can be divided by ');
function isPrime(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num%i===0) {
      return false;
    }
  }
  return true;
}
console.log('now i need another function that simply finds all the factors of a number.  Methodology is the same, start at one below the number and decrement finding any i where num%i===0');
function isFactor(num) {
  const factorsArray = [];
  for (let i = num - 1; i > 1; i--) {
    if (num%i===0) {
      factorsArray.push(i);
    }
  }
  return factorsArray;
}
console.log('now i could write these into a single sleeker function to save some lines.  HOwever, since these are eminently repeatable and reusable bits of code, i don\'t want to intertwine them.  I\'d rather keep them separate so they can be reapplied later if I want to snip them out to save time finding primes or factors later on.  So i\'ll make a new function that merely calls each of them to find all prime factors of a number');
function primeFactors(num) {
  const primeFactorsArr = [];
  const factorsArr = isFactor(num);
  factorsArr.forEach((factor) => {
    if (isPrime(factor)) {
      primeFactorsArr.push(factor);
    }
  });
  return primeFactorsArr;
}
console.log('again, for reusability, i created a fourth function that runs the primeFactors function, and then finds the greatest value in the array that it returns, less to reuse this fourth function, but to keep the third one reusable in other contexts');
function returnGreatestPrimeFactor(num) {
  const primeFactorsArr = primeFactors(num);
  const greatestPrime = Math.max(...primeFactorsArr);
  return greatestPrime;
}
console.log('unfortunately, while i\'m confident this will work, I can\'t get this to complete the function without breaking my chrome window.  I\'ll have to test it on another machine when i get the chance ');
// console.log('now to run this last function on the number w\'re given: 600851475143');
// const answer = returnGreatestPrimeFactor(600851475143);
// console.log(`answer is ${answer}`);
//
// const displayAnswer = document.createElement('h1');
// displayAnswer.innerHTML = `<span>${answer}</span> is the answer`;
// document.getElementById('root').appendChild(displayAnswer);
