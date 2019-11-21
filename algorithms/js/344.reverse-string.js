/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 * https://leetcode.com/problems/reverse-string/
 * [Easy][String][Two Pointers]
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  let l = 0;
  let r = s.length - 1;
  while (s.length > 0 && l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
};
// @lc code=end

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
