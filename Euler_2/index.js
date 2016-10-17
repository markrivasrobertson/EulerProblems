const fibArray = [];

function findFib() {
  let sum = 0;
  let lastNum = 1;
  let currentNum = 2;
  fibArray.push(currentNum);
  for (let i = 0; i < 30; i++) {
    let newSum = lastNum + currentNum;
    if (newSum%2===0) {
      fibArray.push(newSum);
    }
    lastNum = currentNum*1
    currentNum = newSum*1;
  }
  fibArray.forEach((member) => {
    sum+=member;
  });
  return sum;
}

const answer = findFib();
console.log(`answer is ${answer}`);
