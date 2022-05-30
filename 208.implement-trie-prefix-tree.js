const childrenSize = 256;

function TrieNode(val = null) {
    this.val = val;
    this.children = new Array(childrenSize).fill(null);
}

var Trie = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word.charCodeAt(i);
        if (!parent.children[char]) {
            parent.children[char] = new TrieNode();
        }
        parent = parent.children[char];
    }

    const originValue = parent.val
    if (originValue === null) {
        parent.val = 1
    } else {
        parent.val = originValue + 1;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word.charCodeAt(i);
        if (!parent) {
            break;
        }
        parent = parent.children[char];
    }
    return parent && parent.val !== null;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let parent = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix.charCodeAt(i);
        if (!parent) {
            break;
        }
        parent = parent.children[char];
    }
    return parent !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

(new Trie()).search('a')