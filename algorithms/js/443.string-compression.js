/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 * https://leetcode.com/problems/string-compression/
 * [Easy][String]
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
  if (!chars || chars.length === 0) return 0;
  if (chars.length === 1) return 1;
  let length = 1;
  let count = 1;
  const addChar = ch => (chars[length++] = ch);
  const incrementCount = () => count++;
  const resetCount = () => (count = 1);
  const addCount = () => `${count}`.split("").forEach(addChar);
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      incrementCount();
    } else if (count !== 1) {
      addCount();
      resetCount();
      addChar(chars[i]);
    } else {
      addChar(chars[i]);
    }
  }
  if (count !== 1) addCount();
  return (chars.length = length);
};
// @lc code=end

let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
compress(chars);
console.log(chars);
