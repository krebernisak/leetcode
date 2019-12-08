/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * [Medium][Array][Two pointers]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k number of duplicates
 * @return {number}
 */
const removeDuplicates = (nums, k = 2) => {
  if (!nums || !nums.length) return 0;
  let p = 0;
  nums.forEach(n => {
    if (p < k || n > nums[p - k]) nums[p++] = n;
  });
  return p;
};
// @lc code=end

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
