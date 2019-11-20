/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 * https://leetcode.com/problems/missing-number/
 * [Easy][Array][Math][Bitwise]
 */

// @lc code=start
/**
 * We can compute the sum of nums in linear time, and by Gauss' formula,
 * we can compute the sum of the first n natural numbers in constant time.
 * Therefore, the number that is missing is simply the result of
 * Gauss' formula minus the sum of nums, as nums consists of the first
 * n natural numbers minus some number.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber_gauss = nums => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber_xor = nums =>
  nums.reduce((acc, val, i) => acc ^ val ^ i, nums.length);

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = missingNumber_xor;
// @lc code=end

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
