/*
 * @Author: This is CodeMan
 */
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 True
// trie.search("app");     // 返回 False
// trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True

class Trie {
    constructor() {
        this.children = new Array(26).fill(0)
        this.isEnd = false
    }
    insert(word) {
        let node = this
        for (const ch of word) {
            let index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
            
            if (node.children[index] === 0) {
                node.children[index] = new Trie()
            }
            node = node.children[index]
        }
        console.log(node)
        node.isEnd = true
    }
    searchPrefix(prefix) {
        let node = this
        for (const ch of prefix) {
            let index = ch.charCodeAt(0) - 'a'.charCodeAt(0)
            if (node.children[index] === 0) {
                return false
            }
            node = node.children[index]
        }
        return node
    }
    search(word) {
        return !!this.searchPrefix(word) && this.isEnd
    }
    startsWith(prefix) {
        return !!this.searchPrefix(prefix)
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 True
console.log(trie.search("app"));     // 返回 False
console.log(trie.startsWith("app")); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True