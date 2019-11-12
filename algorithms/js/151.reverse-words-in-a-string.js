/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * [Medium]
 */

// @lc code=start

/**
 * Given an input string, reverse the string word by word.
 * @description Method#1: Uses built string manipulation
 *
 * @param {string} str input string
 * @return {string} reversed string
 */
const reverseWords1 = str =>
  str
    .trim()
    .split(/\s+/) // whitespace+ match
    .reverse()
    .join(" ");

/**
 * Given an input string, reverse the string word by word.
 * @description Method#2: Uses array unshift to reverse words and ignores spaces
 *  - Time: O(n) & Space: O(n)
 *
 * @param {string} str input string
 * @return {string} reversed string
 */
const reverseWords2 = str => {
  let stack = [];
  for (let j = 0; j < str.length; j++) {
    if (str[j] === " ") continue;
    const start = j;
    while (j <= str.length && str[j++] !== " ");
    stack.unshift(str.substring(start, --j));
  }
  return stack.join(" ");
};

/**
 * Given an input string, reverse the string word by word.
 * @description Method#3: Convert string to array and reverse array in place
 *  - Time: O(n) & Space: O(n) or O(1) in a language with mutable strings like C or C++
 *
 * @param {string} str input string
 * @return {string} reversed string
 */
const reverseWords3 = str => {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  const reverse = (s, start, end) => {
    for (; start < end; start++, end--) swap(s, start, end);
  };

  let startIdx = 0;
  const strArr = str.split("");
  // reverse whole string
  reverse(strArr, 0, strArr.length - 1);
  // reverse word one by one
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") continue;
    if (startIdx != 0) strArr[startIdx++] = " ";
    let j = i;
    while (j < strArr.length && strArr[j] !== " ")
      strArr[startIdx++] = strArr[j++];
    reverse(strArr, startIdx - (j - i), startIdx - 1); // startIdx - 1, NOT startIdx;
    i = j;
  }
  // remove excess and join
  return strArr.slice(0, startIdx).join("");
};

// @lc expected function
const reverseWords = reverseWords1;
// @lc code=end

const tests = [
  ["", ""],
  ["   ", ""],
  ["the sky is blue", "blue is sky the"],
  ["  hello world!  ", "world! hello"],
  ["a good   example", "example good a"],
  ["a good   example again   !", "! again example good a"]
];
const functions = [reverseWords1, reverseWords2, reverseWords3];

tests.forEach((v, i) => {
  functions.forEach(f => {
    const res = f(v[0]);
    console.assert(
      res === v[1],
      `Function ${f.name} failed for [${v}] case [Expected: ${
        v[1]
      }, Got: ${res}]`
    );
  });
});

console.log("Tests Finished");
