/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 * [Easy][Linked List][Two Pointers][Stack]
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
 * Determine whether the list is a palindrome
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome_stack = head => {
  let p = head;
  let runner = head;
  let stack = [];

  // run to the end of list while collecting values in stack
  while (runner && runner.next) {
    stack.push(p.val);
    p = p.next;
    runner = runner.next.next;
  }

  // skip middle if necessary
  if (runner) p = p.next;

  // check second half of list
  while (p) {
    if (stack.pop() !== p.val) return false;
    p = p.next;
  }
  return true;
};

/**
 * Reverse the Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  var pre = null;
  var next = null;
  while (head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

/**
 * Determine whether the list is a palindrome
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome_reverse = head => {
  if (head == null || head.next == null) return true;
  var slow = head;
  var fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while (slow != null) {
    if (head.val != slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

/**
 * Determine whether the list is a palindrome
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = isPalindrome_reverse;
// @lc code=end
