/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * [Easy][Array][Two Pointers]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k number of duplicates
 * @return {number}
 */
const removeDuplicates_kDuplicates = (nums, k = 1) => {
  if (!nums || !nums.length) return 0;
  let p = 0;
  nums.forEach(n => {
    if (p < k || n > nums[p - k]) nums[p++] = n;
  });
  return p;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  if (!nums || !nums.length) return 0;
  let p = 0;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    if (nums[p] === current) continue;
    nums[++p] = current;
  }
  return p + 1;
};
// @lc code=end

const data = [1, 2, 2, 3, 4];
const len = removeDuplicates(data);
data.length = len;
console.log(data);

console.assert(len === removeDuplicates_kDuplicates([1, 2, 2, 3, 4]));
