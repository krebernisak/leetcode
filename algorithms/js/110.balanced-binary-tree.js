/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const UNBALANCED = -1;

/**
 * @param {TreeNode} n
 * @return {boolean} true if balanced false otherwise
 */
const isBalanced = n => getBalancedHeight(n) !== UNBALANCED;

/**
 * @param {TreeNode} n
 * @return {boolean} tree height if balanced or -1
 */
const getBalancedHeight = n => {
  if (n === null) return 0;
  const heightLeft = getBalancedHeight(n.left);
  if (heightLeft === UNBALANCED) return UNBALANCED;
  const heightRight = getBalancedHeight(n.right);
  if (heightRight === UNBALANCED) return UNBALANCED;
  const diff = Math.abs(heightLeft - heightRight);
  return diff <= 1 ? Math.max(heightLeft, heightRight) + 1 : UNBALANCED;
};
// @lc code=end
