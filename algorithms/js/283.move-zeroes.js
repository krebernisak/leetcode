/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 * [Easy][Array][Two Pointers]
 */

// @lc code=start
/**
 * Algorithm: if you find 0, splice and push 0 to the end. Iterates.
 * O(n^2) because it iterates twice, splice takes o(n) to reach the value needed to splice
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes_splice = nums => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes_count = nums => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;
    else nums[i - count] = nums[i];
  }
  const pos = nums.length - count;
  for (let i = pos; i < nums.length; i++) nums[i] = 0;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes_position = nums => {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[pos++] = nums[i];
  }
  for (let i = pos; i < nums.length; i++) nums[i] = 0;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = moveZeroes_position;
// @lc code=end

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
