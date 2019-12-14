/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 * https://leetcode.com/problems/single-number-iii/
 * [Medium][Bitwise]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
  let aXorB = nums.reduce((total, n) => total ^ n);

  // find the different bit
  // standard way of finding the LSB (least significant bit)
  // aXorB &= -aXorB; or
  const lastBit = (aXorB & (aXorB - 1)) ^ aXorB;

  let res = [0, 0];
  nums.forEach(n => {
    // based on the last bit, group the items into groupA(include a) and groupB
    if (lastBit & n) res[0] ^= n;
    else res[1] ^= n;
  });
  return res;
};
// @lc code=end

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
