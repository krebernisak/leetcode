/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start

const isPalindrome = (s, low = 0, high = s.length - 1) => {
  while (low < high) if (s[low++] !== s[high--]) return false;
  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition_nRecursive = s => {
  const res = [];
  const _self = (index, path) => {
    if (index === s.length) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (!isPalindrome(s, index, i)) continue;
      path.push(s.substring(index, i + 1));
      _self(i + 1, path);
      path.pop();
    }
  };
  _self(0, []);
  return res;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition_nRecursiveMemo = s => {
  const res = [];
  const mapToUndefined = () => Array(s.length).fill(undefined);
  const memo = Array.from(Array(s.length), mapToUndefined);

  const isPalindromeMemoize = (low, high) => {
    if (memo[low][high] === undefined)
      memo[low][high] = isPalindrome(s, low, high);
    return memo[low][high];
  };

  const _self = (index, path) => {
    if (index === s.length) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (!isPalindromeMemoize(index, i)) continue;
      console.log(s.substring(index, i + 1));
      path.push(s.substring(index, i + 1));
      _self(i + 1, path);
      path.pop();
    }
  };
  _self(0, []);
  return res;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = partition_nRecursive;
// @lc code=end

console.log(partition("aab"));
