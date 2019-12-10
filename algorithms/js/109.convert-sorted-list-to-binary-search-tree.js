/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * [Medium][Linked List][DFS]
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Traverse the list to get the middle element and make that the root.
 * Left side of the list forms left sub-tree and right side
 * of the middle element forms the right sub-tree.
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head, tail = null) => {
  if (!head || head === tail) return null;
  let slow = head;
  let fast = head;

  while (fast !== tail && fast.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const node = new TreeNode(slow.val);
  node.left = sortedListToBST(head, slow);
  node.right = sortedListToBST(slow.next, tail);
  return node;
};
// @lc code=end
