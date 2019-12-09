/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * [Medium][Tree][DFS][Linked List]
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten_preorder = root => {
  if (!root) return;
  if (root.left) {
    let node = root.left;
    while (node.right) node = node.right;
    node.right = root.right;
    [root.left, root.right] = [null, root.left];
  }
  flatten(root.right);
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten_reversedPreorder = (root, pre = null) => {
  if (!root) return pre;
  pre = flatten(root.right, pre);
  pre = flatten(root.left, pre);
  root.right = pre;
  root.left = null;
  pre = root;
  return pre;
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten_morrisPreorder = root => {
  let cur = root;
  let prev = null;
  while (cur !== null) {
    if (!cur.left) cur = cur.right;
    else {
      prev = cur.left;
      while (prev.right !== null) prev = prev.right;
      prev.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = flatten_morrisPreorder;
// @lc code=end
