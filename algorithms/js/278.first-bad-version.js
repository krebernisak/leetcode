/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 * https://leetcode.com/problems/first-bad-version/
 * [Easy][Binary Search]
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * Time complexity: O(log n).
 * Space complexity: O(1).
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return n => {
    let l = 0;
    let r = n;
    while (l <= r) {
      const middle = l + Math.floor((r - l) / 2);
      if (isBadVersion(middle)) {
        r = middle - 1;
      } else {
        l = middle + 1;
      }
    }
    return isBadVersion(l) ? l : -1;
  };
};
// @lc code=end
