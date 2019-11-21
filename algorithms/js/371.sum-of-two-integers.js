/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 * https://leetcode.com/problems/sum-of-two-integers/
 * [Easy][Bitwise]
 * https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently
 */

// @lc code=start
/**
 * Get sum using iteration
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum_iteration = (a, b) => {
  if (a === 0) return b;
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

/**
 * Get sum using recursion
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum_recursion = (a, b) =>
  b === 0 ? a : getSum_recursion(a ^ b, (a & b) << 1); // xor + carry

/**
 * Fastest implementation
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = getSum_iteration;
// @lc code=end

/* EXTRA: Bit manipulation use cases for subtract & negate */

/**
 * Get subtract using iteration
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSubtract_iteration = (a, b) => {
  while (b !== 0) {
    let borrow = ~a & b;
    a = a ^ b;
    b = borrow << 1;
  }
  return a;
};

/**
 * Get subtract using recursion
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSubtract_recursion = (a, b) =>
  b === 0 ? a : getSubtract_recursion(a ^ b, (~a & b) << 1);

/**
 * Get negative number
 * @param {number} x
 * @return {number}
 */
const negate = x => ~x + 1;

console.log(getSum(1, 2));
console.log(getSum(-2, 3));
console.log(getSum(-1, 1));
console.log(getSum(0, -1));

console.log(getSubtract_iteration(1, 2));
console.log(getSubtract_recursion(-2, 3));
console.log(negate(-1));
console.log(negate(1));
