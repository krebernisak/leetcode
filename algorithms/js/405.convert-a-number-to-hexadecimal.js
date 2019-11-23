/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/
 * [Easy][Bitwise]
 */

// @lc code=start
/**
 * Each time we take a look at the last four digits of
 * binary version of the input, and maps that to a hex char
 * shift the input to the right by 4 bits, do it again
 * until input becomes 0.
 *
 * @param {number} num
 * @return {string}
 */
const toHex = num => {
  if (num === 0) return "0";
  const alphabet = "0123456789abcdef";
  let res = "";
  while (num !== 0) {
    res = alphabet[num & 0xf] + res;
    num >>>= 4;
  }
  return res;
};
// @lc code=end

console.log(toHex(26));
console.log(toHex(-1));
