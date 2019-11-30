/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 * https://leetcode.com/problems/binary-search/
 * [Easy][Array][Binary Search]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search_iteration = (nums, target) => {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] === target) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search_recursion = (nums, target) => {
  const _self = (l, r) => {
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) return _self(mid + 1, r);
      else return _self(l, mid - 1);
    }
    return -1;
  };
  return _self(0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = search_iteration;
// @lc code=end

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
