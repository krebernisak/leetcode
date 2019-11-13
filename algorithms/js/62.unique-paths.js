/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 * https://leetcode.com/problems/unique-paths/
 * [Medium][Array][DP]
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths_topDown = (m, n) => {
  const cache = {};
  const _self = function(i, j) {
    if (i >= m || j >= n) return 0;
    else if (i === m - 1 && j === n - 1) return 1;
    else if (cache[`${i},${j}`]) return cache[`${i},${j}`];
    else {
      const count = _self(i + 1, j) + _self(i, j + 1);
      cache[`${i},${j}`] = count;
      return count;
    }
  };
  return _self(0, 0);
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths_bottomUp = (m, n) => {
  const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) dp[i][j] = 1;
      else if (j === 0) dp[i][j] = 1;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = uniquePaths_bottomUp;
// @lc code=end

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
