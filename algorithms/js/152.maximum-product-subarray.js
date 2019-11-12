/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 * [Medium][Array][Dynamic Programming]
 * @see byte-by-byte 3. Matrix product
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
  if (!nums) return 0;
  let max = nums[0];
  // keep track of extremes
  let maxProduct = nums[0]; // maxProduct[i] is max with nums[i] included
  let minProduct = nums[0]; // minProduct[i] is min with nums[i] included
  for (let i = 1; i < nums.length; i++) {
    // we look at current number and both extremes, to find new extremes
    candidates = [nums[i], maxProduct * nums[i], minProduct * nums[i]];
    maxProduct = Math.max(...candidates);
    minProduct = Math.min(...candidates);
    max = Math.max(max, maxProduct, minProduct);
  }
  return max;
};
// @lc code=end

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
