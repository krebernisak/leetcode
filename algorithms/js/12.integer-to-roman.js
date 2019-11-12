/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 * [Medium]
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const keysToRoman = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };

  let roman = "";
  while (num > 0) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (num >= key) {
        num -= key;
        roman += keysToRoman[key];
        break;
      }
    }
  }
  return roman;
};
// @lc code=end
