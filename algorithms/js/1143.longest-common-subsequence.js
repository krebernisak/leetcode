/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 * [Medium][Recursion][Dynamic Programming]
 */

// @lc code=start

// Method1()- recursive solution(Top- down approach)
// time complexity - O(3^(m+n))
// space complexity - O(m+n)
const LCSM1 = (X, Y) => {
  const _self = (i, j) => {
    if (i <= 0 || j <= 0) return 0;
    if (X[i - 1] == Y[j - 1]) return 1 + _self(i - 1, j - 1);
    else return Math.max(_self(i, j - 1), _self(i - 1, j));
  };
  return _self(X.length, Y.length);
};

// Method2()- recursive solution with memoization
// time complexity - O(m*n)
// space complexity - O(m*n)
const LCSM2 = (X, Y) => {
  const memo = [...Array(X.length + 1)].map(() => [...Array(Y.length + 1)]);
  const _self = (i, j) => {
    if (i <= 0 || j <= 0) return 0;
    if (memo[i][j]) return memo[i][j];
    if (X[i - 1] == Y[j - 1]) return 1 + _self(i - 1, j - 1);
    else {
      memo[i][j] = Math.max(_self(i, j - 1), _self(i - 1, j));
      return memo[i][j];
    }
  };
  return _self(X.length, Y.length);
};

// Method3()- DP solution(Bottom up approach)
// time complexity - O(m*n)
// space complexity - O(m*n)
const LCSM3 = (X, Y) => {
  const memo = [...Array(X.length + 1)].map(() => [...Array(Y.length + 1)]);
  for (let i = 0; i <= X.length; i++) {
    for (let j = 0; j <= Y.length; j++) {
      if (i === 0 || j === 0) memo[i][j] = 0;
      else if (X[i - 1] == Y[j - 1]) memo[i][j] = memo[i - 1][j - 1] + 1;
      else memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }
  return memo[X.length][Y.length];
};

// Method4()- DP solution(Bottom up approach)
// time complexity - O(m*n)
// space complexity - O(n)
const LCSM4 = (X, Y) => {
  const memo = [...Array(Y.length + 1)].fill(0);
  for (let i = 1; i <= X.length; i++) {
    let prev = 0;
    for (let j = 1; j <= Y.length; j++) {
      let temp = memo[j];
      if (X[i - 1] == Y[j - 1]) memo[j] = prev + 1;
      else memo[j] = Math.max(memo[j], memo[j - 1]);
      prev = temp;
    }
  }
  return memo.pop();
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = LCSM4;
// @lc code=end

const tests = [
  ["abcde", "ace", 3],
  ["abc", "abc", 3],
  ["abc", "def", 0],
  ["hello world", "world hello", 5],
  ["gogo loves english", "gogo loves EN", 11]
];
const functions = [LCSM1, LCSM2, LCSM3, LCSM4];

tests.forEach((v, i) => {
  functions.forEach(f => {
    const res = f(v[0], v[1]);
    console.assert(
      res === v[2],
      `Function ${f.name} failed for ${v} case [Expected: ${v[2]}, Got: ${res}]`
    );
  });
});

console.log("Tests Finished");
