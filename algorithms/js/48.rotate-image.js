/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 * https://leetcode.com/problems/rotate-image/
 * [Medium][Array]
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate_reverse = A => {
  A = A.reverse();
  for (let i in A)
    for (let j = 0; j < i; j++) [A[i][j], A[j][i]] = [A[j][i], A[i][j]];
  return A;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate_swap = A => {
  if (A.length === 0) return matrix;
  const n = A.length;
  // [0][0] => [0][2]
  // [0][1] => [1][2]
  // [0][2] => [2][2]

  // [1][0] => [0][1]
  // [1][1] => [1][1]
  // [1][2] => [2][1]

  // [2][0] => [0][0]
  // [2][1] => [1][0]
  // [2][2] => [2][0]
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.ceil(n / 2); j++) {
      const ib = n - 1 - i;
      const jb = n - 1 - j;
      [
        // swap 4 sides
        A[i][j],
        A[jb][i],
        A[ib][jb],
        A[j][ib]
      ] = [
        // for
        A[jb][i],
        A[ib][jb],
        A[j][ib],
        A[i][j]
      ];
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = rotate_swap;
// @lc code=end

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(matrix);
console.log(matrix);
