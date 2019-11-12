/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * [Medium][Linked List]
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @lc code=start
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const res = new ListNode(0);
  let p = res;
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + p.val;
    carry = 0;
    if (sum >= 10) {
      p.val = sum - 10;
      p.next = new ListNode(1);
    } else {
      p.val = sum;
      p.next = new ListNode(0);
    }
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    if (!l1 && !l2 && p.next.val === 0) p.next = null;
    p = p.next;
  }
  return res;
};
// @lc code=end
