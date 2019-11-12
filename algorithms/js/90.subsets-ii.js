/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 * https://leetcode.com/problems/subsets-ii
 * [Medium][Array][Backtracking]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup_iteration = nums => {
  // sort nums so we can detect duplicates
  nums.sort((a, b) => a - b);
  // init results with empty set
  const res = [[]];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    // if duplicate index from last step, else index from beginning
    if (i === 0 || nums[i] !== nums[i - 1]) index = 0;
    const n = res.length;
    for (let j = index; j < n; j++) {
      const copy = [...res[j]]; // copy every result
      copy.push(nums[i]); // push current num to copy
      res.push(copy); // push to result
    }
    index = n;
  }

  return res;
};

/**
 * Each recursion level focuses on one element, we need to decide choose or
 * not choose this element. (Every level split into 2 branches.)
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup_binaryRecursion = nums => {
  // sort nums so we can detect duplicates
  nums.sort((a, b) => a - b);
  const res = [];
  const _self = (index, path, prevChosen = false) => {
    if (index === nums.length) {
      res.push([...path]);
      return;
    }
    _self(index + 1, path);
    if (index >= 1 && nums[index] == nums[index - 1] && !prevChosen) return;

    path.push(nums[index]);
    _self(index + 1, path, true); // choose
    path.pop();
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
const subsetsWithDup_nRecursion = nums => {
  // sort nums so we can detect duplicates
  nums.sort((a, b) => a - b);
  const res = [];
  const _self = (index, path) => {
    res.push([...path]);
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] == nums[i - 1]) continue; // skip duplicates
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
const subsetsWithDup = subsetsWithDup_iteration;
// @lc code=end

console.log(subsetsWithDup([2, 1, 2, 2]));
