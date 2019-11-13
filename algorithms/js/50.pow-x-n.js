/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 * [Medium][Binary Search]
 * TODO: https://leetcode.com/problems/powx-n/discuss/19544/5-different-choices-when-talk-with-interviewers
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return n % 2 === 0
    ? myPow(x ** 2, Math.floor(n / 2))
    : x * myPow(x ** 2, Math.floor(n / 2));
};
// @lc code=end
