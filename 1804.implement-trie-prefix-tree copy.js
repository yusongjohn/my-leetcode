const charcterSize = 26;

function TrieNode() {
    this.val = 0;
    this.shareCount = 0;
    this.children = new Array(charcterSize).fill(null);
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
        parent.shareCount++;
    }

    parent.val++;
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length && parent; i++) {
        const char = word.charCodeAt(i);
        parent = parent.children[char];
    }
    if (!parent) return 0;
    return parent.val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
    let parent = this.root;
    for (let i = 0; i < prefix.length && parent; i++) {
        const char = prefix.charCodeAt(i);
        parent = parent.children[char];
    }
    if (!parent) return 0;
    return parent.shareCount;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
    let parent = this.root;
    for (let i = 0; i < word.length && parent; i++) {
        const char = word.charCodeAt(i);
        parent = parent.children[char];
        parent.shareCount--;
    }
    parent.val--
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */