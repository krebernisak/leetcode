/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 * https://leetcode.com/problems/count-and-say
 * [Easy][String][Regex]
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  let res = "1";
  while (n-- > 1) {
    res = res
      .match(/(.)\1*/g)
      .reduce((acc, val) => acc + `${val.length}${val[0]}`, "");
  }
  return res;
};
// @lc code=end

console.log(countAndSay(5));
console.log(countAndSay(10));
