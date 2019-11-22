/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * [Easy][Hash Table][String]
 */

// @lc code=start
const ASCII_A_SMALL = "a".charCodeAt(0);
const getIndex = s => s.charCodeAt(0) - ASCII_A_SMALL;

/**
 * 1. Get the frequency of each character.
 * 2. Get the first character that has a frequency of one.
 *
 * Complexity Analysis
 *   Time complexity: O(n) since we go through the string of length N two times.
 *   Space complexity: O(n) since we have to keep a hash map with N elements.
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  let freq = [];
  for (let i = 0; i < s.length; i++) {
    freq[getIndex(s[i])] = (freq[getIndex(s[i])] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[getIndex(s[i])] === 1) return i;
  }
  return -1;
};
// @lc code=end
