/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/description/
 * [Easy][Array]
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  if (!numRows || numRows <= 0) return [];
  if (numRows === 1) return [[1]];
  const pascal = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal.push(row);
  }
  return pascal;
};
// @lc code=end

console.log(generate(6));
