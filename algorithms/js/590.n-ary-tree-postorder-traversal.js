/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * [Easy][Tree]
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder_recursion = (root, order = []) => {
  if (!root) return order;
  (root.children || []).forEach(node => postorder_recursion(node, order));
  order.push(root.val);
  return order;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder_iteration = root => {
  const order = [];
  if (!root) return order;
  const stack = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    order.unshift(node.val);
    (node.children || []).forEach(node => stack.push(node));
  }
  return order;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = postorder_iteration;
// @lc code=end
