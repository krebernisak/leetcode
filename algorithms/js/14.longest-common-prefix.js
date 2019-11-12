/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 * [Easy][String]
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let i = 0;
  let prefix = "";
  while (true) {
    let curr = "";
    for (let j = 0; j < strs.length; j++) {
      const s = strs[j];
      if (s.length === i) return prefix;
      else if (curr === "") curr = s[i];
      else if (curr !== s[i]) return prefix;
    }
    [prefix, i] = [prefix + curr, i + 1];
  }
};
// @lc code=end

console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
