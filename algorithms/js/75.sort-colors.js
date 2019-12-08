/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 * https://leetcode.com/problems/sort-colors/
 * [Medium][Array][Two pointers][Sort]
 */

// @lc code=start
/**
 * Just like the Lomuto partition algorithm usually used in quick sort.
 * We keep a loop invariant that [0,i) [i, j) [j, k) are 0s, 1s and 2s
 * sorted in place for [0,k). Here ")" means exclusive.
 * We don't need to swap because we know the values we want.
 *
 * https://www.geeksforgeeks.org/hoares-vs-lomuto-partition-scheme-quicksort/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors_LomutoPartition = nums => {
  let [i, j] = [0, 0];
  nums.forEach((v, k) => {
    nums[k] = 2;
    if (v < 2) nums[j++] = 1;
    if (v == 0) nums[i++] = 0;
  });
};

/**
 * A bit of history: this is "Dutch national flag" problem first proposed by Dijkstra.
 * https://en.wikipedia.org/wiki/Dutch_national_flag_problem
 * Quicksort uses this "3-way partition" to handle input with lots of duplicates.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors_threeWayPartition = (nums, mid = 1) => {
  let [i, j, n] = [0, 0, nums.length - 1];
  while (j <= n) {
    if (nums[j] < mid) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap(i,j)
      i++;
      j++;
    } else if (nums[j] > mid) {
      [nums[j], nums[n]] = [nums[n], nums[j]]; // swap(j,n)
      n--;
    } else j++;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors_countingSort = nums => {
  let buckets = [0, 0, 0];
  let i = 0;
  nums.forEach(n => buckets[n]++);
  buckets.forEach((n, j) => {
    while (n-- > 0) nums[i++] = j;
  });
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = sortColors_threeWayPartition;
// @lc code=end

let colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors);
