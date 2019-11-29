/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * [Easy][String][Two Pointers]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  if (!s) return true;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const cl = toLowerCase(s, l);
    if (cl < 0) {
      l++;
      continue;
    }
    const cr = toLowerCase(s, r);
    if (cr < 0) {
      r--;
      continue;
    }

    if (cl !== cr) return false;
    else {
      l++;
      r--;
    }
  }
  return true;
};

const toLowerCase = (s, i) => {
  if (i < 0 || i >= s.length) return -1;
  const code = s[i].charCodeAt(0);
  if (code >= 48 && code <= 57) return code;
  else if (code >= 65 && code <= 90) return code;
  else if (code >= 97 && code <= 122) return code - 32;
  else return -1;
};
// @lc code=end
