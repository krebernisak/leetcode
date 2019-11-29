/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 * https://leetcode.com/problems/to-lower-case/
 * [Easy][String]
 */

// @lc code=start

const toLowerCaseCode = (s, i) => {
  if (i < 0 || i >= s.length) return -1;
  const code = s[i].charCodeAt(0);
  if (code >= 65 && code <= 90) return code + 32;
  else if (code >= 97 && code <= 122) return code;
  else return code;
};

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(toLowerCaseCode(str, i));
  }
  return res;
};
// @lc code=end

console.log(toLowerCase("Hello"));
