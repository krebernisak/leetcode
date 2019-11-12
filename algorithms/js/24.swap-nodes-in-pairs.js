/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs_recursion = head => {
  if (!head || !head.next) return head;
  let [v1, v2] = [head, head.next];
  let v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs_recursion(v3);
  return v2;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs_iteration = head => {
  if (!head || !head.next) return head;
  const res = head.next; // second node is the new head
  let prev = null;
  let p = head;
  while (p && p.next) {
    if (prev) prev.next = p.next; // connect prev to p.next node move
    [prev, p] = [p, p.next]; // move next
    [p.next, prev.next] = [prev, p.next]; // swap
    p = prev.next; // restore pointer after swap
  }
  return res;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = swapPairs_iteration;
// @lc code=end
