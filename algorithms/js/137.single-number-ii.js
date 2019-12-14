/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 * https://leetcode.com/problems/single-number-ii/
 * [Medium][Bitwise]
 */

// @lc code=start
/**
 * Count how many 1s are there in each bit, and sum %= 3 will clear it once it reaches 3.
 * After running for all the numbers for each bit, if we have a 1,
 * then that 1 belongs to the single number, we can simply move it back to its spot
 * by doing ans |= sum << i;
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let answer = 0;
  for (let i = 0; i < 32; i++) {
    let sum = 0;
    nums.filter(n => ((n >> i) & 1) === 1).forEach(_ => sum++);
    sum %= 3;
    if (sum) answer |= sum << i;
  }
  return answer;
};
// @lc code=end
