/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 * https://leetcode.com/problems/sum-of-left-leaves/
 * [Easy][Tree]
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
 * @param {boolean} isLeft
 * @return {number}
 */
const sumOfLeftLeaves = (root, isLeft = false) => {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
// @lc code=end
