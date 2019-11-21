/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * [Easy][Math][Binary Search]
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  if (num === 0) return true;
  else if (num === 1) return true;
  else return searchSquare(num, 1, Math.floor(num / 2));
};

// Binary search
const searchSquare = (x, l, r) => {
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let square = mid ** 2;
    if (square === x) return true;
    else if (square < x) return searchSquare(x, mid + 1, r);
    else return searchSquare(x, l, mid - 1);
  }
  return false;
};
// @lc code=end
