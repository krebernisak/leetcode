/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * [Easy][Array][Hash Table]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  if (nums.length <= 1) return false;
  const set = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
// @lc code=end

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
