/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 * https://leetcode.com/problems/same-tree
 * [Easy][Tree][Recursion]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
