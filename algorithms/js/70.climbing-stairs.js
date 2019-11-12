/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/solution/
 * [Recursion][DP]
 */

// @lc code=start

/**
 * Top down recursive approach
 * @param {number} n
 * @return {number}
 */
const climbStairs_topDown = n => {
  const _self = n => {
    if (n < 2) return n;
    if (n === 2) return 2;
    return _self(n - 1) + _self(n - 2);
  };
  return _self(n);
};

/**
 * Top down recursive approach with memoization
 * @param {number} n
 * @return {number}
 */
const climbStairs_topDownMemo = n => {
  const cache = [0, 1, 2];
  const _self = n => {
    if (n < cache.length) return cache[n];
    if (!cache[n]) cache[n] = _self(n - 1) + _self(n - 2);
    return cache[n];
  };
  return _self(n);
};

/**
 * Bottom up iterative approach
 * @param {number} n
 * @return {number}
 */
const climbStairs_bottomUp = n => {
  let cache = [0, 1, 2];
  if (n < cache.length) return cache[n];
  for (let i = 3; i <= n; i++) {
    cache.push(cache[i - 1] + cache[i - 2]);
  }
  return cache[n];
};

/**
 * Bottom up iterative optimized approach
 * @param {number} n
 * @return {number}
 */
const climbStairs_bottomUpOptimized = n => {
  let cache = [0, 1, 2];
  if (n < cache.length) return cache[n];
  for (let i = 3; i <= n; i++) {
    cache = [cache[1], cache[2], cache[1] + cache[2]];
  }
  return cache[2];
};

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = climbStairs_bottomUpOptimized;
// @lc code=end

const tests = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const functions = [
  climbStairs_topDown,
  climbStairs_topDownMemo,
  climbStairs_bottomUp,
  climbStairs_bottomUpOptimized
];

tests.forEach((v, i) => {
  functions.forEach(f => {
    const res = f(i);
    console.assert(
      res === v,
      `Function ${f.name} failed for ${i} steps [Expected: ${v}, Got: ${res}]`
    );
  });
});

console.log("Tests Finished");
