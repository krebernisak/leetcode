/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * [Easy]
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) return false;
  if (x < 10) return true;
  let y = 0;
  const original = x;
  while (x !== 0) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return y === original;
};
// @lc code=end
