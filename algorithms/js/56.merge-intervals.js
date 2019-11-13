/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 * [Medium][Array][Sort]
 * Similar challenges:
 *  - https://leetcode.com/problems/meeting-rooms/
 *  - https://leetcode.com/problems/meeting-rooms-ii/
 *  - https://leetcode.com/problems/non-overlapping-intervals/
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = res[res.length - 1];
    const current = intervals[i];
    if (current[0] < prev[0]) {
      prev[0] = current[0];
      prev[1] = Math.max(prev[1], current[1]);
    } else if (current[0] > prev[1]) {
      res.push(current);
    } else prev[1] = Math.max(prev[1], current[1]);
  }
  return res;
};
// @lc code=end

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));
