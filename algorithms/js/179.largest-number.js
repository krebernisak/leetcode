/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 * https://leetcode.com/problems/largest-number/
 * [Medium][Sort]
 */

// @lc code=start

const compare = (a, b) => `${b}${a}` - `${a}${b}`;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * @description Method#1: Uses built in sort and reduce
 *  - Time: O(n*log(n)) & Space: O(n)
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber1 = nums =>
  nums.sort(compare).reduce((ac, c) => (ac || c ? ac + c : c), "") || "0";

/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * @description Method#2: Uses bubble sort
 *  - Time: O(n^2) & Space: O(n)
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber2 = nums => {
  if (!nums.length) return "0";
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (!compare(nums[j], nums[j + 1])) swap(nums, j, j + 1);
    }
  }
  return nums.join("");
};

/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * @description Method#2: Uses selection sort
 *  - Time: O(n^2) & Space: O(n)
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber3 = nums => {
  if (!nums.length) return "0";
  for (let i = 0; i < nums.length; i++) {
    // set minimum to this position
    let min = i;
    // check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < nums.length; j++) {
      if (!compare(nums[j], nums[min])) min = j;
    }
    // if the minimum isn't in the position, swap it
    if (i != min) swap(nums, i, min);
  }
  return nums.join("");
};

/**
 * @lc Expected function
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = largestNumber1;
// @lc code=end

const tests = [
  [[], "0"],
  [[10, 2], "210"],
  [[10, 5], "510"],
  [[10, 5, 9], "9510"],
  [[3, 30, 34, 5, 9], "9534330"]
];
const functions = [largestNumber1, largestNumber2, largestNumber3];

tests.forEach((v, i) => {
  functions.forEach(f => {
    const res = f(v[0]);
    console.assert(
      res === v[1],
      `Function ${f.name} failed for [${v}] case [Expected: ${
        v[1]
      }, Got: ${res}]`
    );
  });
});

console.log("Tests Finished");
