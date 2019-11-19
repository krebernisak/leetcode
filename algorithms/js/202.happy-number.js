/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 * https://leetcode.com/problems/happy-number/
 * [Easy][Hash Table][Math]
 */

// @lc code=start

/**
 * Sum of the squares of its digits
 * @param {number} n
 * @return {number}
 */
const sumSquaresOfDigits = n => {
  let res = 0;
  while (n > 0) {
    res += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return res;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy_iteration = n => {
  const seen = {};
  while (true) {
    n = sumSquaresOfDigits(n);
    if (n === 1) return true;
    if (n === 0 || seen[n]) return false;
    seen[n] = true;
  }
};

/**
 * Slow and fast calculation to find cycle
 * @param {number} n
 * @return {boolean}
 */
var isHappy_iterationCycle = n => {
  let slow = n;
  let fast = sumSquaresOfDigits(n);
  while (slow !== fast) {
    slow = sumSquaresOfDigits(slow);
    fast = sumSquaresOfDigits(sumSquaresOfDigits(fast));
  }
  return slow === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy_recursion = n => {
  if (n === 4) return false;
  const next = [...n.toString()].reduce((ac, c) => ac + c ** 2, 0);
  return next === 1 || isHappy(next);
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = isHappy_iteration;
// @lc code=end

console.log(isHappy(19));
console.log(isHappy(100));
console.log(isHappy(4));
