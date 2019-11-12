/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 * https://leetcode.com/problems/subsets
 * [Medium][Array][Backtracking]
 */

// @lc code=start
/**
 * Using [1, 2, 3] as an example, the iterative process is like:
 *   1. Initially, one empty subset [[]]
 *   2. Adding 1 to []: [[], [1]];
 *   3. Adding 2 to [] and [1]: [[], [1], [2], [1, 2]];
 *   4. Adding 3 to [], [1], [2] and [1, 2]: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_iteration = nums => {
  const res = [[]];
  nums.forEach(num => {
    const n = res.length;
    for (let i = 0; i < n; i++) {
      const copy = [...res[i]]; // copy every result
      copy.push(num); // push current num to copy
      res.push(copy); // push to result
    }
  });
  return res;
};

/**
 * Each recursion level focuses on one element, we need to decide choose or
 * not choose this element. (Every level split into 2 branches.)
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_binaryRecursion = nums => {
  const res = [];
  const _self = (index, path) => {
    if (index === nums.length) {
      res.push([...path]);
      return;
    }
    path.push(nums[index]);
    _self(index + 1, path);
    path.pop();
    _self(index + 1, path);
  };
  _self(0, []);
  return res;
};

/**
 * Each recursion level focuses on all the following elements. We scan through
 * all the following elements and decide whether to choose or not choose that
 * element. (Every level split into N branches.)
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_nRecursion = nums => {
  const res = [];
  const _self = (index, path) => {
    res.push([...path]);
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      _self(i + 1, path);
      path.pop();
    }
  };
  _self(0, []);
  return res;
};

/**
 * Best solution
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums =>
  nums < 4 ? subsets_nRecursion(nums) : subsets_binaryRecursion(nums);
// @lc code=end

console.log(subsets([1, 2, 3]));
