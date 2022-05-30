/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] Replace Words
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    const trieInstance = new Trie();
    dictionary.forEach(item => trieInstance.insert(item));
    const result = (sentence.split(' ')).map(item => trieInstance.shortestPrefixOf(item));
    return result.join(' ')
};

function TrieNode(val) {
    this.val = val;
    this.children = (new Array(26)).fill(null);
}

function Trie() {
    this.root = new TrieNode(-1);
}

Trie.prototype.insert = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (!parent.children[code]) {
            parent.children[code] = new TrieNode();
        }
        parent = parent.children[code]
    }
    parent.val = true; // 值
}

Trie.prototype.shortestPrefixOf = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length && parent; i++) {
        const code = word.charCodeAt(i);
        parent = parent.children[code];
        if (parent && parent.val) {
            return word.substring(0, i + 1);
        }
    }
    return (parent && parent.val) ? word.substring(0, i) : word
}

// @lc code=end
