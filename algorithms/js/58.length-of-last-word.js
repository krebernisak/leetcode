/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 * [Easy][String]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord_standard = s =>
  s.trim().length - s.trim().lastIndexOf(" ") - 1;

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord_counter = function(s) {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (isWordChar(s[s.length - i - 1])) length++;
    else if (length > 0) return length;
  }
  return length;
};

const isWordChar = s => {
  const code = s.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = lengthOfLastWord_counter;
// @lc code=end
