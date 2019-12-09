/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * [Medium][Hash table][Stack][Tree]
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
 * @return {number[]}
 */
const inorderTraversal_recursion = (root, order = []) => {
  if (!root) return order;
  inorderTraversal_recursion(root.left, order);
  order.push(root.val);
  inorderTraversal_recursion(root.right, order);
  return order;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal_iteration = function(root) {
  let order = [];
  let stack = [];

  while (root || stack.length) {
    if (root) {
      // go all the way left
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      order.push(root.val);
      // go right
      root = root.right;
    }
  }

  return order;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = inorderTraversal_iteration;
// @lc code=end
