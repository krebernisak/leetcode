/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
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
 * @return {number}
 */
const findSecondMinimumValue_dfs_iteration = root => {
  // each node in this tree has exactly two or zero sub-node
  if (!root || !root.left) return -1;
  const q = [root];
  let res = -1;
  while (q.length > 0) {
    const curr = q.shift();
    if (curr.right) q.push(curr.right);
    if (curr.left) q.push(curr.left);
    if (curr.val !== root.val) {
      if (!res) res = curr.val;
      else res = Math.min(res, curr.val);
    }
  }
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue_recursion = root => {
  // each node in this tree has exactly two or zero sub-node
  if (!root || !root.left) return -1;

  let l =
    root.left.val == root.val
      ? findSecondMinimumValue(root.left)
      : root.left.val;
  let r =
    root.right.val == root.val
      ? findSecondMinimumValue(root.right)
      : root.right.val;

  return l == -1 || r == -1 ? Math.max(l, r) : Math.min(l, r);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = findSecondMinimumValue_dfs_iteration;
// @lc code=end
