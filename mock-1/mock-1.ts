// # Mock Interview 1

// # Two Sum II - Input array is sorted
// # Given a sorted array of integers and a target sum,
// # return the indices (1-based) of the two numbers that add up to the target using the two-pointer technique.
// # Example:
// # Input: numbers = [2, 7, 11, 15], target = 9
// # Output: [1, 2]  (2 + 7 = 9)
// # Input: numbers = [1, 3, 4, 5, 7], target = 8
// # Output: [2, 4]
const twoSum = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) {
      right--;
    }
    if (sum < target) {
      left++;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([1, 3, 4, 5, 7], 8)); // [2, 4]

// # Longest Substring Without Repeating Characters
// # Given a string, find the length of the longest substring without repeating characters using the sliding window technique.
// # Example:
// # Input: "abcabcbb"
// # Output: 3  ("abc")
// # Input: "bbbbb"
// # Output: 1  ("b")
