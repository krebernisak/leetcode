/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  var out;
  if (l1.val <= l2.val) {
    out = l1;
    l1 = l1.next;
  } else {
    out = l2;
    l2 = l2.next;
  }

  var p = out;
  while (l1 || l2) {
    if (!l1) {
      p.next = l2;
      break;
    } else if (!l2) {
      p.next = l1;
      break;
    }

    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  return out;
};
// @lc code=end
