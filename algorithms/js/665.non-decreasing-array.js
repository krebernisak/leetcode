/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 * https://leetcode.com/problems/non-decreasing-array/
 * [Easy][Array]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
  let count = 0;
  for (let i = 0; i + 1 < nums.length; i++) {
    if (nums[i] <= nums[i + 1]) continue;
    if (count++ === 1) return false;
    if (i > 0 && nums[i + 1] < nums[i - 1]) nums[i + 1] = nums[i];
  }
  return count <= 1;
};

// @lc code=end
