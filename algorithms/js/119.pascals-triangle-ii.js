/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 * [Easy][Array]
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  if ((!rowIndex && rowIndex !== 0) || rowIndex < 0) return [];
  if (rowIndex === 0) return [1];
  let memory = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = memory[j - 1] + memory[j];
    }
    memory = row;
  }
  return memory;
};
// @lc code=end

console.log(getRow(3));
