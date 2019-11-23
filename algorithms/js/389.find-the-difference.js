/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 * https://leetcode.com/problems/find-the-difference/
 * [Easy][String][Hash Table][Bitwise]
 */

// @lc code=start
/**
 * This implementation works when only one (1) character is different
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference_xor = (s, t) => {
  let c = "";
  for (let i = 0; i < s.length; ++i) c ^= s.charCodeAt(i);
  for (let i = 0; i < t.length; ++i) c ^= t.charCodeAt(i);
  return String.fromCharCode(c);
};

const ASCII_A_SMALL = "a".charCodeAt(0);
const getIndex = s => s.charCodeAt(0) - ASCII_A_SMALL;
const getChar = i => String.fromCharCode(ASCII_A_SMALL + i);

/**
 * This implementation works with multiple different characters
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference_count = (s, t) => {
  const count = new Array(26).fill(0);
  for (let i = 0; i < t.length; i++) count[getIndex(t[i])]++;
  for (let i = 0; i < s.length; i++) count[getIndex(s[i])]--;
  return count
    .map((val, i) => (val !== 0 ? getChar(i).repeat(Math.abs(val)) : ""))
    .join("");
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = findTheDifference_count;
// @lc code=end

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("abcd", "abcdee"));
console.log(findTheDifference("abcd", "abcdeef"));
console.log(findTheDifference("abcde", "abcd"));
console.log(findTheDifference("abcdee", "abcd"));
console.log(findTheDifference("abcdeef", "abcd"));
