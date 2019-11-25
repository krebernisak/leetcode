/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/description
 * [Medium][Trie]
 */

// @lc code=start

class Node {
  constructor(val, isWord) {
    this.val = val;
    this.isWord = isWord;
    this.children = {};
  }
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trie = new Node("", false);
};

/**
 * Inserts a word into the trie.
 * @param {string} w
 * @return {void}
 */
Trie.prototype.insert = function(w) {
  let node = this.trie;
  for (let i = 0; i < w.length; i++) {
    const [val, isWord] = [w[i], w.length === i + 1];
    if (!node.children[val]) node.children[val] = new Node(val, isWord);
    else if (isWord) node.children[val].isWord = isWord;
    node = node.children[val];
  }
};

/**
 * Returns array of words matching a query in the trie.
 * @param {string} q
 * @return {boolean}
 */
Trie.prototype.query = function(q) {
  if (!q) return [];
  const res = [];
  // BFS starting from the trie root
  const queue = [[this.trie, "", -1]];
  while (queue.length > 0) {
    let [node, str, count] = queue.shift();
    [str, count] = [str + node.val, count + 1];
    if (node.isWord && str.length >= q.length) res.push(str);
    Object.values(node.children)
      .filter(n => count >= q.length || n.val === q[count])
      .forEach(n => queue.push([n, str, count]));
  }
  return res;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.query(word).includes(word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.query(prefix).length > 0;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app")); // returns true
