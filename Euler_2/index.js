console.log('so the task asks me to add all the even fibonacci numbers.  unfortunately the first two numbers in the sequence are arbitrary, from a pattern standpoint.  The series simply starts with one and two, which don\'t actually have the same relation to each other as every other member of the sequence has to its two predecessors and two successors.');
console.log('my first inclination is simply to run a forEach through the sequence, but since the sequence isn\'t neatly patterned because of 1 and 2, it will be hard to do this.  Instead, I simply added 2 to an existing sum variable set at zero');
function findFib() {
  let sum = 0;
  console.log('sum');
  console.log(sum);
  let lastNum = 1;
  let currentNum = 2;
  sum += currentNum;
  console.log('sum with 2 added');
  console.log(sum);
  console.log('then i ran a for loop finding the other fibonacci numbers.  To do this, i looked up the whole sequence to see where it would cross the threshold of four million.  It was the 32nd member, so having already gone through 1 and 2, i ran the four loop for 30 iterations')
  for (let i = 0; i < 30; i++) {
    let newSum = lastNum + currentNum;
    if (newSum%2===0) {
      console.log(`Add ${newSum} to the sum`);
      sum += newSum;
      console.log(`so the sum is currently ${sum}`);
    }
    lastNum = currentNum*1
    currentNum = newSum*1;
  }
  return sum;
}

const answer = findFib();
console.log(`answer is ${answer}`);

const displayAnswer = document.createElement('h1');
displayAnswer.innerHTML = `<span>${answer}</span> is the answer`;
document.getElementById('root').appendChild(displayAnswer);
