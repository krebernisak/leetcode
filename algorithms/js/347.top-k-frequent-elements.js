/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * [Medium][Hash Table][Heap]
 */

// @lc code=start
/**
 * Bucket sort
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let freq = {};
  for (let i = 0; i < nums.length; i++)
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;

  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, k);
};
// @lc code=end
