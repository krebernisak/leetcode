/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 * [Easy][Array][DP]
 */

// @lc code=start
/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {
  let max = 0;
  let maxIndex = 0;
  let secondMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      secondMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] >= secondMax) {
      secondMax = nums[i];
    }
  }
  return secondMax * 2 > max ? -1 : maxIndex;
};
// @lc code=end

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
