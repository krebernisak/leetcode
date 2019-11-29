/*
 * @lc app=leetcode id=686 lang=javascript
 *
 * [686] Repeated String Match
 * https://leetcode.com/problems/repeated-string-match/
 * [Easy][String]
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length);
  const str = A.repeat(count);
  if (str.includes(B)) return count;
  return (str + A).includes(B) ? count + 1 : -1;
};
// @lc code=end

console.log(repeatedStringMatch("abcd", "cdabcdab"));
