/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * [Medium][Linked List]
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const isNextDuplicate = n => n.next && n.val === n.next.val;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates_iteration = head => {
  const dummy = new ListNode(0);
  let pre = dummy;
  dummy.next = head;
  while (head && head.next) {
    if (isNextDuplicate(head)) {
      while (isNextDuplicate(head)) head = head.next;
      head = head.next;
      pre.next = head;
    } else {
      head = head.next;
      pre = pre.next;
    }
  }
  return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates_recursion = head => {
  if (!head || !head.next) return head;

  if (isNextDuplicate(head)) {
    while (isNextDuplicate(head)) head = head.next;
    head = deleteDuplicates_recursion(head.next);
  } else {
    head.next = deleteDuplicates_recursion(head.next);
  }

  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = deleteDuplicates_iteration;
// @lc code=end
