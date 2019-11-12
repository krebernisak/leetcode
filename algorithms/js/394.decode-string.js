/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const pattern = /(\d+)\[([A-Za-z]+)\]/g;
  const replacer = (match, p1, p2) => p2.repeat(parseInt(p1));
  while (s.indexOf("[") !== -1) s = s.replace(pattern, replacer);
  return s;
};
// @lc code=end

const tests = ["3[a]2[bc]", "3[a2[c]]", "2[abc]3[cd]ef"];
tests.forEach(s => {
  console.log(decodeString(s));
});
