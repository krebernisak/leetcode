/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 * https://leetcode.com/problems/remove-element
 * [Easy][Array][Two Pointers]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) continue;
    else nums[p++] = nums[i];
  }
  return p;
};
// @lc code=end
