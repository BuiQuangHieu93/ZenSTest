function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  const minSum = sum - arr[arr.length - 1];
  const maxSum = sum - arr[0];

  console.log(minSum, maxSum);

  // bonus path
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const total = arr.length;

  const evenElements = arr.filter((num) => num % 2 === 0);
  const oddElements = arr.filter((num) => num % 2 !== 0);
}

const input = "1 3 5 7 9";
const arr = input.split(" ").map(Number);
miniMaxSum(arr);
