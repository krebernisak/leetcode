/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 * [Medium][Array][Two Pointers][Binary Search]
 */

// @lc code=start
/**
 * Does not satisfy the constraints given (modify array)
 * Time complexity : O(n*log(n))
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate_sort = nums => {
  nums.sort(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return nums[i];
  }
  return -1;
};

/**
 * Do a binary search on the set of numbers [1,...,n].
 * For each number, count how many elements of
 * the array are <= or >= that number. Recurse as appropriate.
 *
 * Time complexity : O(n*log(n))
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate_search = nums => {
  let l = 1;
  let r = nums.length - 1;
  while (true) {
    const mid = l + Math.floor((r - l) / 2);
    let leq = 0;
    let geq = 0;
    for (const n of nums) {
      if (n <= mid) ++leq;
      if (n >= mid) ++geq;
    }
    if (leq > mid) r = mid;
    if (geq > nums.length - mid) l = mid;
    if (l === r) return l;
    if (l === mid) ++l;
    else --r;
  }
};

/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate_cycleDetection = nums => {
  // Find the intersection point of the two runners.
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Find the "entrance" to the cycle.
  let p1 = nums[0];
  let p2 = slow;
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }

  return p1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = findDuplicate_cycleDetection;
// @lc code=end

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
