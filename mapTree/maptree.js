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
  if (pointer === undefined) return false
  for (; i < word.length; i++) {
    if (word[i] === '.') {
      for (const [key, node] of pointer.entries()) {
        if (key === this.tag) continue
        if(this.search(word,node,i+1)) return true
      }
      return false
    }
  }
  return !!pointer.get(this.tag)
}