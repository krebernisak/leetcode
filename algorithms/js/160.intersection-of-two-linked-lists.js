/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 * https://leetcode.com/problems/intersection-of-two-linked-lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (headA === headB) return headA;
  if (!headA || !headB) return null;
  // find length of both lists and calculate diff
  let diff = 0;
  let p1 = headA;
  let p2 = headB;
  while (p1) [p1, diff] = [p1.next, diff + 1];
  while (p2) [p2, diff] = [p2.next, diff - 1];
  // try to align heads (move head of longer list)
  if (diff <= 0) {
    while (diff !== 0 && headB) [headB, diff] = [headB.next, diff + 1];
  } else {
    while (diff !== 0 && headA) [headA, diff] = [headA.next, diff - 1];
  }
  // if heads can not be aligned
  if (diff !== 0) return null;
  // else iterate until one head ENDS or we find an intersection
  while (headA && headB && headA !== headB)
    [headA, headB] = [headA.next, headB.next];
  // return either if same or null
  return headA === headB ? headA : null;
};
// @lc code=end
