/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii/
 * [Medium][Array][Backtracking]
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2_nRecursion = (candidates, target) => {
  // First sort input so we can find duplicates later
  candidates.sort((a, b) => a - b);

  const res = [];
  const _self = (index, remains, path) => {
    if (remains === 0) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      const curr = candidates[i];
      if (remains < curr) break; // skip the rest if over target
      if (i > index && curr === candidates[i - 1]) continue; // skip duplicates
      path.push(curr);
      _self(i + 1, remains - curr, path);
      path.pop();
    }
  };

  _self(0, target, []);
  return res;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2_iterativeSet = (candidates, target) => {
  let set = [];
  // first pass generate set candidate sums
  for (let c of candidates) {
    let addition = [],
      arr = [c],
      sum = c;
    addition.push({ arr, sum });

    // second pass
    for (let j = 0; j < set.length; j++) {
      let copy = { arr: [...set[j].arr, c], sum: set[j].sum + c };
      if (copy.sum <= target) addition.push(copy);
    }
    set = [...set, ...addition];
  }

  const resultSet = set
    .filter(s => s.sum === target)
    .reduce((map, n) => ({ ...map, [n.arr.sort().join("")]: n.arr }), {});

  return Object.values(resultSet);
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = combinationSum2_nRecursion;
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
