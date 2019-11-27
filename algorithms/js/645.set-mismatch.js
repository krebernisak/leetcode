/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 * https://leetcode.com/problems/set-mismatch/
 * [Easy][Hash Table][Math]
 */

// @lc code=start
/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums_additionalArray = nums => {
  const arr = Array(nums.length + 1).fill(0);
  let dup = -1;
  let missing = 1;
  nums.forEach(val => arr[val]++);
  arr.forEach((val, i) => {
    if (val === 0) missing = i;
    else if (val === 2) dup = i;
  });
  return [dup, missing];
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums_reuseArray = nums => {
  let dup = -1;
  let missing = 1;
  nums.forEach(val => {
    const n = Math.abs(val);
    if (nums[n - 1] < 0) dup = n;
    else nums[n - 1] *= -1;
  });
  nums.forEach((val, i) => (missing = val > 0 ? i + 1 : missing));
  return [dup, missing];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = findErrorNums_reuseArray;
// @lc code=end

console.log(findErrorNums([1, 2, 2, 4]));
