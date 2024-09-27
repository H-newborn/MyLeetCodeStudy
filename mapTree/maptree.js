/*
 * @Author: This is CodeMan
 */
var WordDictionary = function () {
  this.root = new Map();
  this.tag = Symbol("isEnd");
};

WordDictionary.prototype.addWord = function (word) { 
  let point = this.root
  for (const cn of word) {
    if (!point.has(char)) point.set(char, new Map())
    point = pointer.get(char)
  }
  pointer.set(this.tag, true)
}

WordDictionary.prototype.search = function (word, pointer = this.root, i = 0) {
  const dfs = (node, index) => {
    if (word.length === index) {
      return node.isEnd
    }
    let ch = word[index]
    if (ch !== '.') {
      const child = node.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
      if (child && dfs(index + 1, child)) {
        return true
      }
    } else {
      for (const child of node.children) {
        if (child && dfs(index + 1, child)) {
          return true
        }
      }
    }
  }
  dfs(0, this.trieNodeRoot)
}