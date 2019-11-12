/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * Delete node from list (does not work for tail node)
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * Get Nth to the Last Element
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const nthToLast = (head, n) => {
  if (!head) return null;
  let slow = head;
  let fast = head;
  // Move fast pointer n steps
  while (fast.next && n-- > 0) fast = fast.next;
  // If end of list before n steps return null
  if (n > 0) return null;
  // Move both pointers until faster reaches the end
  while (fast.next) [slow, fast] = [slow.next, fast.next];
  return slow;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // n is always valid so we find prev or we are looking for head
  const prev = nthToLast(head, n);
  const node = prev ? prev.next : head;
  if (!node) return head;
  if (node === head) return head.next;
  // check for tail node case
  if (!node.next) prev.next = null;
  else deleteNode(node); // delete any other non tail node
  return head;
};
// @lc code=end
