/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 * https://leetcode.com/problems/add-binary/
 * [Easy][Math][String]
 */

// @lc code=start

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary_recursion = (a, b) => {
  const withoutLast = s => s.substr(0, s.length - 1);
  if (a.length === 0) return b;
  if (b.length === 0) return a;
  if (a[a.length - 1] === "1" && b[b.length - 1] === "1") {
    const res = addBinary_recursion(withoutLast(a), withoutLast(b));
    return addBinary_recursion(res, "1") + "0"; // curry
  } else if (a[a.length - 1] === "0" && b[b.length - 1] === "0") {
    return addBinary_recursion(withoutLast(a), withoutLast(b)) + "0";
  }
  return addBinary_recursion(withoutLast(a), withoutLast(b)) + "1";
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary_iteration = (a, b) => {
  let res = "";
  let c = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    c += parseInt(a.length - i - 1 >= 0 ? a[a.length - i - 1] : "0");
    c += parseInt(b.length - i - 1 >= 0 ? b[b.length - i - 1] : "0");
    res = (c % 2 === 0 ? "0" : "1") + res;
    c = parseInt(c / 2);
  }
  return c ? (res = `1${res}`) : res;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = addBinary_iteration;
// @lc code=end

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
