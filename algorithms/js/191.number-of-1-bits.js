/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 * [Easy][Bitwise]
 */

// @lc code=start

/**
 * n & (n - 1) drops the lowest set bit. It's a neat little bit trick.
 *
 * Let's use n = 00101100 as an example. This binary representation has three 1s.
 *
 * If n = 00101100, then n - 1 = 00101011, so n & (n - 1) = 00101100 & 00101011 = 00101000. Count = 1.
 * If n = 00101000, then n - 1 = 00100111, so n & (n - 1) = 00101000 & 00100111 = 00100000. Count = 2.
 * If n = 00100000, then n - 1 = 00011111, so n & (n - 1) = 00100000 & 00011111 = 00000000. Count = 3.
 *
 * n is now zero, so the while loop ends, and the final count (the numbers of set bits) is returned.
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight_dropLowestBit = n => {
  let count = 0;

  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight_dropLowestBit_recursion = n => {
  return n ? 1 + hammingWeight_dropLowestBit_recursion(n & (n - 1)) : 0;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight_shift = n => {
  let count = 0;
  let bits = 32;

  while (bits-- > 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = hammingWeight_dropLowestBit;
// @lc code=end

console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(hammingWeight(0b00000000000000000000000010000000));
console.log(hammingWeight(0b11111111111111111111111111111101));
