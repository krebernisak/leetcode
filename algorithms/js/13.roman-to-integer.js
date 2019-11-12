/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * [Easy]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let res = 0;
  const n = s.length;
  for (let i = 0; i < n - 1; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];
    res += current < next ? -1 * current : current;
  }

  return (res += roman[s[n - 1]]);
};
// @lc code=end
