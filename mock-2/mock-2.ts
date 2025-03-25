// # Mock Interview 2

// # Power of Three
// # Determine if a given integer is a power of three using recursion.
// # Example:
// # Input: 27
// # Output: True
// # Input: 10
// # Output: False

const powerOfThree = (int: number) => {
  if (int <= 0) return false;
  if (int % 3 === 0) return powerOfThree(int / 3);
  if (int === 1) return true;
  return false;
};

console.log(powerOfThree(27));
console.log(powerOfThree(10));

// # (Medium) Combination Sum
// # Given an array of unique integers and a target sum, return all unique combinations where numbers sum to the target.
// # Numbers can be used multiple times.
// # Example:
// # Input: candidates = [2,3,6,7], target = 7
// # Output: [[2,2,3], [7]]
// # Input: candidates = [2,3,5], target = 8
// # Output: [[2,2,2,2], [2,3,3], [3,5]]

const findCombinations = (
  arr: number[],
  target: number,
  curr: number[],
  output: number[][],
  i: number
) => {
  if (target === 0) {
    output.push([...curr]);
    return;
  }

  if (target < 0 || i >= arr.length) return;
  curr.push(arr[i]);
  findCombinations(arr, target - arr[i], curr, output, i);
  curr.pop();
  findCombinations(arr, target, curr, output, i + 1);
};

const combinationSum = (arr: number[], target: number) => {
  arr.sort();
  const output: number[][] = [];
  const curr: number[] = [];
  findCombinations(arr, target, curr, output, 0);
  return output;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
