/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * [Medium][Linked List][Two Pointers]
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
const detectCycle_map = head => {
  if (!head) return null;
  const map = new Map();
  while (head.next) {
    if (map.has(head)) return head;
    map.set(head);
    head = head.next;
  }
  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle_twoPointers = head => {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    [slow, fast] = [slow.next, fast.next.next];
    if (slow === fast) break;
  }

  if (slow !== fast) return null;

  while (head !== slow) [head, slow] = [head.next, slow.next];

  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = detectCycle_twoPointers;
// @lc code=end
