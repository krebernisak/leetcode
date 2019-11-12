/*
 * @lc app=leetcode id=55 lang=javascript
 * https://leetcode.com/problems/jump-game
 * [55] Jump Game
 */

// @lc code=start
/**
 * This works but it is slow and big, O(N^2) Time and O(N) Space
 * Time limit exceeded ERROR
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump_recursion = (nums, index = 0) => {
  if (index >= nums.length) return false;
  if (index === nums.length - 1) return true;
  const maxJump = nums[index];
  if (maxJump <= 0) return false;
  return [...Array(maxJump).keys()]
    .reverse()
    .map(jump => index + jump + 1)
    .reduce((acc, i) => acc || canJump_recursion(nums, i), false);
};

/**
 * This works but it is slow and big, O(N^2) Time and O(N) Space
 * Time limit exceeded ERROR
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump_recursionSimple = (nums, target = nums.length - 1) => {
  if (target <= 0) return true;
  for (let i = target - 1; i > -1; i--) {
    if (nums[i] + i >= target && canJump_recursionSimple(nums, i)) return true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump_iteration = nums => {
  let start = 0;
  let end = nums[0];
  while (end < nums.length - 1) {
    let next_jump = 0;
    while (start <= end) {
      next_jump = Math.max(next_jump, nums[start] + start);
      start += 1;
    }
    if (next_jump <= end) return false;
    start = end;
    end = next_jump;
  }
  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump_greedy = nums => {
  let reachable = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (i > reachable) return false;
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = canJump_greedy;
// @lc code=end

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
