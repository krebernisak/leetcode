/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 * [Medium][Array][Binary Search]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => search(nums, 0, nums.length - 1);

const search = (nums, l, r) => {
  if (l === r) return l;
  const mid = l + Math.floor((r - l) / 2);
  if (nums[mid] > nums[mid + 1]) return search(nums, l, mid);
  else return search(nums, mid + 1, r);
};
// @lc code=end

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
