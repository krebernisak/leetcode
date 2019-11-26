/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 * https://leetcode.com/problems/number-complement/
 * [Easy][Bitwise]
 */

// @lc code=start
/**
 * Example: 100110, its complement is 011001, the sum is 111111.
 * So we only need get the min number large or equal to num, then do subtraction.
 * @param {number} num
 * @return {number}
 */
const findComplement_pow = num => {
  let i = 0;
  let j = 0;
  while (i < num) i += Math.pow(2, j++);
  return i - num;
};

/**
 * num         = 00000101
 * mask        = 00000111
 * ~num & mask = 00000010
 * @param {number} num
 * @return {number}
 */
const findComplement_shift = num => {
  let mask = 0b1;
  while (mask < num) mask = (mask << 1) | 1;
  return ~num & mask;
};

/**
 * num          = 00000101
 * mask         = 11111000
 * ~mask & ~num = 00000010
 * @param {number} num
 * @return {number}
 */
const findComplement_shift2 = num => {
  let mask = ~0;
  while (num & mask) mask = mask << 1;
  return ~mask & ~num;
};

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = findComplement_shift;
// @lc code=end

console.log(findComplement(5));
console.log(findComplement(1));
