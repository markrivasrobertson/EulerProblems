const divisibleArray = [];

function findDivisibles() {
  for (let i = 1; i < 10000000; i++) {
    if (i%2===0 && i%3===0 && i%5===0 && i%7===0 && i%11===0 && i%13===0 && i%17===0 && i%19===0) {
      return i;
    }
  }
}

const answer = findDivisibles();
console.log(`answer is ${answer}`);
