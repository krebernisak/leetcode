/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 * https://leetcode.com/problems/remove-linked-list-elements/
 * [Easy][Linked List]
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
 * Remove all elements from a linked list of integers that have value val.
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  while (head && head.val === val) head = head.next;
  let curr = head;
  while (curr !== null && curr.next !== null)
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  return head;
};
// @lc code=end
