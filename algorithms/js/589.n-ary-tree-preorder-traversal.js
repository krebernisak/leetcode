/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * [Easy][Tree]
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder_recursion = (root, order = []) => {
  if (!root) return order;
  order.push(root.val);
  (root.children || []).forEach(node => preorder_recursion(node, order));
  return order;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder_iteration = root => {
  const order = [];
  if (!root) return order;
  const stack = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    order.push(node.val);
    (node.children || []).reverse().forEach(node => stack.push(node));
  }
  return order;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = preorder_iteration;
// @lc code=end
