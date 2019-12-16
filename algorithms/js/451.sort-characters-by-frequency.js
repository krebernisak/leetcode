/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 * https://leetcode.com/problems/sort-characters-by-frequency/
 * [Medium][Hash Table][Heap]
 */

// @lc code=start
/**
 * Bucket sort
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  let freq = {};
  for (let i = 0; i < s.length; i++) freq[s[i]] = (freq[s[i]] || 0) + 1;

  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .map(k => k.repeat(freq[k]))
    .join("");
};
// @lc code=end
