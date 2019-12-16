/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 * https://leetcode.com/problems/find-bottom-left-tree-value/
 * [Medium][Tree]
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
 * @return {number}
 */
const findBottomLeftValue_dfs = root => {
  let bottomLeft = 0;
  let maxDepth = 0;
  const _self = (node, depth) => {
    if (depth > maxDepth) {
      maxDepth = depth;
      bottomLeft = node.val;
    }
    if (node.left) _self(node.left, depth + 1);
    if (node.right) _self(node.right, depth + 1);
    return bottomLeft;
  };
  return _self(root, 1);
};

/**
 * Right-to-Left BFS
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue_bfs = root => {
  let q = [root];
  while (q.length > 0) {
    root = q.shift();
    if (root.right) q.push(root.right);
    if (root.left) q.push(root.left);
  }
  return root.val;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = findBottomLeftValue_bfs;
// @lc code=end
