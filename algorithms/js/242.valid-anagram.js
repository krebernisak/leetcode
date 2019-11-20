/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * [Easy][Hash Table][Sort]
 */

// @lc code=start
/**
 * Slow O(n*log(n)) time & O(n) space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram_sort = (s, t) => {
  s = s
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  t = t
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return s === t;
};

/**
 * Fast O(n) time & O(1) space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram_count = (s, t) => {
  // we assume lowercase alphabets or we can use .toLowerCase();
  const counters = new Array(128).fill(0);
  for (let i = 0; i < s.length; i++) counters[s.charCodeAt(i)]++;
  for (let i = 0; i < t.length; i++) counters[t.charCodeAt(i)]--;
  return counters.filter(v => v !== 0).length === 0;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = isAnagram_count;
// @lc code=end

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
