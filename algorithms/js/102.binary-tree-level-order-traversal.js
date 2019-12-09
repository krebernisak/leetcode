/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * [Medium][Tree][BFS]
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
 * @return {number[][]}
 */
const levelOrder_recursion = (root, order = [], height = 0) => {
  if (!root) return order;
  if (height >= order.length) order.push([]);
  order[height].push(root.val);
  return (
    levelOrder_recursion(root.left, order, height + 1) &&
    levelOrder_recursion(root.right, order, height + 1)
  );
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder_iteration = root => {
  let order = [];
  if (!root) return order;
  let q = [[root, 0]];
  while (q.length) {
    let [node, height] = q.shift();
    if (height >= order.length) order.push([]);
    order[height].push(node.val);
    [node.left, node.right]
      .filter(n => n !== null)
      .forEach(n => q.push([n, height + 1]));
  }
  return order;
};

/**
 * Technique - took two nested while loops but still the complexity is O(n)
 * The first while loop runs till all the elements have been processed.
 * The second while loop run on the initial size of the queue for that iteration.
 * And then we keep adding nodes to the same queue. So it essentially runs through 1 level at a time.
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder_iterationLessMemory = root => {
  if (!root) return [];

  const queue = [root];
  const order = [];

  while (queue.length) {
    let size = queue.length;
    const level = [];
    while (size-- > 0) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    order.push(level);
  }

  return order;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = levelOrder_iterationLessMemory;
// @lc code=end
