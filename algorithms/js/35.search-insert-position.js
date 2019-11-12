/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 * [Easy][Array][Binary Search]
 */

// TODO: Binary Search implementation

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};
// @lc code=end
