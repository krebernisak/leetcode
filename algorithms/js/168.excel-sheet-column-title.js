/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
const CHAR_CODE_A = 65;
const NUM_CHARS = 26;

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle_iteration = n => {
  let res = "";
  while (n) {
    res = String.fromCharCode(((n - 1) % NUM_CHARS) + CHAR_CODE_A) + res;
    n = Math.floor((n - 1) / 26);
  }
  return res;
};

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle_recursion = n => {
  if (n <= NUM_CHARS) return String.fromCharCode(CHAR_CODE_A + n - 1);
  let count = 0;
  while (n > NUM_CHARS) [n, count] = [n - NUM_CHARS, count + 1];
  return convertToTitle(count) + convertToTitle(n);
};

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = convertToTitle_iteration;
// @lc code=end

console.log(convertToTitle_recursion(701));
console.log(convertToTitle_iteration(701));
