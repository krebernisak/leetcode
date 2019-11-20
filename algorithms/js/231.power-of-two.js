/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 * https://leetcode.com/problems/power-of-two/
 * [Easy][Math][Bitwise]
 */

// @lc code=start

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_recursion = n => {
  if (n === 1) return true;
  else if (n === 0) return false;
  else if (n % 2 != 0) return false;
  else return isPowerOfTwo(n / 2);
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_mod = n => {
  if (n <= 0) return false;
  while (true) {
    if (n % 2 !== 0) break;
    n /= 2;
  }
  return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_log = n => {
  if (n <= 0) return false;
  const log = Math.log2(n);
  return Math.ceil(log) === Math.floor(log);
};

/**
 * Power of 2 means only one bit of n is '1',
 * so use the trick n & (n-1) === 0 to judge whether that is the case.
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_oneBit = n => {
  if (n <= 0) return false;
  return !(n & (n - 1));
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_bitwise = n => {
  if (n <= 0) return false;
  const max = Math.pow(2, 31);
  for (let i = 0; i < 32; i++) {
    if (n > max) return false;
    n = (n << 1) >>> 0; // zero-fill right shift returns an unsigned 32-bit integer
  }
  return true;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = isPowerOfTwo_oneBit;
// @lc code=end

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
