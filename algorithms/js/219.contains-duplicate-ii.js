/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/
 * [Easy][Array][Hash Table]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate_rememberIndex = (nums, k) => {
  const mem = {};
  let n;
  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    if (mem[n] !== undefined && i - mem[n] <= k) return true;
    mem[n] = i;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate_slidingWindow = (nums, k) => {
  if (!nums || nums.length <= 1) return false;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) set.delete(nums[i - k - 1]);
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = containsNearbyDuplicate_rememberIndex;
// @lc code=end

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
