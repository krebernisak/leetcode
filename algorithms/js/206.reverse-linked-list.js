/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList_iteration = head => {
  let curr = null;
  let prev = null;
  while (head !== null) {
    curr = head;
    head = head.next;
    curr.next = prev;
    prev = curr;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList_recursion = head => {
  if (!head || !head.next) return head;
  const reverse = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reverse;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = reverseList_iteration;
// @lc code=end
