/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 * https://leetcode.com/problems/hamming-distance/
 * [Easy][Bitwise]
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_toStringCountOnes = (x, y) =>
  [...(x ^ y).toString(2)].filter(c => c === "1").length;

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_removeLowestBit = (x, y) => {
  let dist = 0;
  let n = x ^ y;
  while (n !== 0) {
    ++dist;
    n &= n - 1; // remove lowest bit
  }
  return dist;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_xor = (x, y) => {
  let count = 0;
  let bits = 32;
  while (bits-- > 0) {
    count += (x & 1) ^ (y & 1);
    x >>>= 1;
    y >>>= 1;
  }
  return count;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = hammingDistance_removeLowestBit;

// @lc code=end

console.log(hammingDistance(1, 4));
