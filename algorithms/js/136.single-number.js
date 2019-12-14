/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 * https://leetcode.com/problems/single-number/
 * [Easy][Bitwise]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((total, num) => total ^ num);
// @lc code=end
