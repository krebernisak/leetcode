/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/
 * [Easy][Array]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let max = 0;
  let sum = 0;
  nums.forEach(val => {
    sum += val;
    // reset sum to zero when zero
    if (val === 0) sum = 0;
    else max = Math.max(max, sum); // keep update max
  });
  return max;
};
// @lc code=end

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
