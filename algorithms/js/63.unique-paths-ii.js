/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 * https://leetcode.com/problems/unique-paths-ii/
 * [Medium][Array][DP]
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
  if (!obstacleGrid || obstacleGrid.length === 0) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
      else if (i === 0 && j === 0) dp[i][j] = 1;
      else if (i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(obstacleGrid));
