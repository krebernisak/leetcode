/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right && root.val === sum) return true;
  const target = sum - root.val;
  return hasPathSum(root.left, target) || hasPathSum(root.right, target);
};
// @lc code=end
