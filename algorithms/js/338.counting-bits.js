/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 * https://leetcode.com/problems/counting-bits/
 * [Medium][Bitwise][DP]
 */

// @lc code=start
/**
 * 1. If it is even, the ending bit is 0, then that bit can be ignored, countBits(num) is the same as countBits(num >> 1),
 * so countBits(num) = countBits(num >> 1);
 * For example:
 *   num:      101010101010
 *   num >> 1: 10101010101
 *
 * 2. If it is odd, the ending bit is 1, then the number of set bits is that of num - 1 + 1, i.e. countBits(num) = countBits(num - 1) + 1
 * For example:
 *   num:     101010101011
 *   num - 1: 101010101010
 * @param {number} num
 * @return {number[]}
 */
const countBits_dp1 = num => {
  let res = [0];

  for (let i = 1; i <= num; i++) {
    if ((i & 1) === 0) {
      res[i] = res[i >> 1]; // even
    } else {
      res[i] = res[i - 1] + 1; // odd
    }
  }

  return res;
};

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits_dp2 = num => {
  let res = [0];
  for (let i = 1; i <= num; i++) {
    let even = i % 2;
    res[i] = even + res[i >> 1]; // (i >> 1) or Math.floor(i / 2)
  }
  return res;
};

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = countBits_dp2;
// @lc code=end

console.log(countBits(5));
