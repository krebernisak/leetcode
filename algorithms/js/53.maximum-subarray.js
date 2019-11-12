/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray
 * [Easy][Array]
 *
 * Kadane's algorithm (Requires at least one negative number)
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
// @lc code=end

console.log(maxSubArray([-2, -5]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
