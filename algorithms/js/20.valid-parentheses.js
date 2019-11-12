/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * [Easy][String][Stack]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && pairs[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end
