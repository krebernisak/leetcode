/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
const averageOfLevels_bfs = root => {
  let result = [];
  let q = [];
  if (!root) return result;
  q.push(root);
  while (q.length !== 0) {
    let n = q.length;
    let sum = 0.0;
    for (let i = 0; i < n; i++) {
      let node = q.shift();
      sum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    result.push(sum / n);
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels_recursion = root => {
  let order = [];
  return levelOrderHelper(order, root, 0, 0).map(o => o[2]);
};

const levelOrderHelper = (order, root, height) => {
  if (!root) return order;
  if (height >= order.length) order.push([1, root.val, root.val]);
  else {
    const o = order[height];
    o[0] = o[0] + 1;
    o[1] = o[1] + root.val;
    o[2] = o[1] / o[0];
  }
  return (
    levelOrderHelper(order, root.left, height + 1) &&
    levelOrderHelper(order, root.right, height + 1)
  );
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = averageOfLevels_bfs;
// @lc code=end
