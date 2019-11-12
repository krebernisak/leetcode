/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {Map}
 */
const buildFreqTable = nums => {
  const map = new Map();
  for (const val of nums) {
    const freq = map.get(val) || 0;
    map.set(val, freq + 1);
  }
  return map;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique_freqTable = nums => {
  if (nums.length < 2) return [nums];

  const res = [];
  const map = buildFreqTable(nums);

  const _self = path => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (const [key, val] of map) {
      if (val === 0) continue;
      map.set(key, val - 1);
      path.push(key);
      _self(path);
      map.set(key, val);
      path.pop();
    }
  };

  _self([]);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique_trackVisited = function(nums) {
  if (nums.length < 2) return [nums];

  // We expect a sorted array for this algorithm to work
  nums.sort((a, b) => a - b);

  const res = [];
  const visited = new Array(nums.length).fill(false);

  const _self = path => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) return;
      visited[i] = true;
      path.push(nums[i]);
      _self(path);
      visited[i] = false;
      path.pop();
    }
  };

  _self([]);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique_trackCandidates = nums => {
  if (nums.length < 2) return [nums];
  const res = [];

  const copyWithout = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1));

  const _self = (candidates, path) => {
    if (candidates.length === 0) res.push([...path]);
    for (const val of new Set(candidates)) {
      const index = candidates.indexOf(val);
      path.push(val);
      _self(copyWithout(candidates, index), path);
      path.pop();
    }
  };

  _self(nums, []);
  return res;
};

const permuteUnique = permuteUnique_trackVisited;
// @lc code=end

console.log(permuteUnique([3, 3, 0, 3]));
