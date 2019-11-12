/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * https://leetcode.com/problems/two-sum/
 * [Easy][Array]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const table = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in table) {
      return [table[complement], i];
    }
    table[nums[i]] = i;
  }

  throw Error("Unable to find solution");
};
// @lc code=end
