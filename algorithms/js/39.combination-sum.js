/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 * https://leetcode.com/problems/combination-sum/
 * [Medium][Array][Backtracking]
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum_binaryRecursion = (candidates, target) => {
  const res = [];
  const _self = (index, remains, path) => {
    if (index === candidates.length) return;
    if (remains < 0) return;
    if (remains === 0) {
      res.push([...path]);
      return;
    }
    const curr = candidates[index];
    path.push(curr);
    _self(index, remains - curr, path);
    path.pop();
    _self(index + 1, remains, path);
  };
  _self(0, target, []);
  return res;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum_nRecursion = (candidates, target) => {
  const res = [];
  const _self = (index, remains, path) => {
    if (remains < 0) return;
    if (remains === 0) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      const curr = candidates[i];
      path.push(curr);
      _self(i, remains - curr, path);
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
const combinationSum_iterativeSet = (candidates, target) => {
  let set = [];
  // first pass generate set candidate sums
  for (let c of candidates) {
    let q = Math.floor(target / c);
    while (q > 0) set.push({ arr: Array(q).fill(c), sum: q-- * c });

    // second pass
    for (let j = 0; j < set.length; j++) {
      // if set first element is candidate
      if (set[j].arr.includes(c)) continue;
      let copy = { arr: [...set[j].arr], sum: set[j].sum };
      while (copy.sum < target) {
        copy.arr.push(c);
        copy.sum += c;
        if (copy.sum <= target) set.push({ arr: [...copy.arr], sum: copy.sum });
      }
    }
  }

  return set.filter(s => s.sum === target).map(s => s.arr);
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = combinationSum_binaryRecursion;
// @lc code=end

console.log(combinationSum([2, 4, 6, 8], 8));
