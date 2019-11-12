/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = [];
  const _self = path => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      _self(path);
      path.pop();
    }
  };
  _self([]);
  return res;
};
// @lc code=end

console.log(permute([1, 2, 3]));
