/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start

const INT_MIN = 1 << 31;
const INT_MAX = ~INT_MIN;
const INT_MIN_STEP = INT_MIN / 10;
const INT_MAX_STEP = INT_MAX / 10;

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;
  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);
    if (rev < INT_MIN_STEP || rev > INT_MAX_STEP) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};
// @lc code=end
