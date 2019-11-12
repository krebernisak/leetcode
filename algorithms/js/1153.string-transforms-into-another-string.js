/*
 * @lc app=leetcode id=1153 lang=javascript
 *
 * [1153] String Transforms Into Another String
 * https://leetcode.com/problems/string-transforms-into-another-string/
 * [String]
 */

// @lc code=start
/**
 * Given two strings str1 and str2 of the same length, determine whether
 * you can transform str1 into str2 by doing zero or more conversions.
 *
 * In one conversion you can convert all occurrences of one character
 * in str1 to any other lowercase English character.
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} true if and only if you can transform str1 into str2.
 */
const canConvert = (s1, s2) => {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  const have = new Set();
  const change = new Map();
  for (let i = 0; i < s1.length; i++) {
    have.add(s2[i]);
    if (!change.has(s1[i])) change.set(s1[i], s2[i]);
    if (change.get(s1[i]) !== s2[i]) return false;
    // console.log(change, have);
  }
  return change.size >= have.size && have.size < 26;
};
// @lc code=end

console.log(canConvert("ab", "ba"));
console.log(canConvert("aabcc", "ccdee"));
console.log(canConvert("aabcc", "eeeee"));
console.log(canConvert("leetcode", "codeleet"));
