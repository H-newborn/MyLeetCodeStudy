/*
 * @Author: This is CodeMan
 */
class WordDictionary {
    private trieRoot
    constructor() {
        this.trieRoot = new TriedNode()
    }

    addWord(word: string): void {
        this.trieRoot.insert(word)
    }

    search(word: string): boolean {
        const dfs = (root, index) => {
            let node = root.children
            if (index === word.length) {
                return node.isEnd
            }

            if (word[index] !== '.') {
                const index1 = word[index].charCodeAt(0) - 'a'.charCodeAt(0)
                if (node[index1] && dfs(node[index1], index+1)) {
                    return true
                }
                
            } else {
                for (const ch of node.children) {
                    if (node[ch] && dfs(node[ch], index + 1)) {
                        return true
                    }
                }
            }
            
            return false
        }

        dfs(this.trieRoot, 0)
    }
}

class TriedNode {
    private children
    private isEnd
    constructor() {
        this.children = new Array(26).fill(0)
        this.isEnd = true
    }
    insert(word) {
        let node = this
        for (const ch of word) {
            const index = ch.charCodeAt() - 'a'.charCodeAt(0)
            if (this.children[index] === 0) {
                this.children[index] = new Array(26).fill(0)
            }
            node = this.children[index]
        }
        node.isEnd = true
    }
}