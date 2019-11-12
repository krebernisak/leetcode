/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 * https://leetcode.com/problems/implement-strstr/
 * [Easy][String][Two Pointers]
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle || needle.length === 0 || haystack === needle) return 0;
  const diff = haystack.length - needle.length;
  if (diff < 0) return -1;
  for (let i = 0; i < diff + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
};
// @lc code=end
