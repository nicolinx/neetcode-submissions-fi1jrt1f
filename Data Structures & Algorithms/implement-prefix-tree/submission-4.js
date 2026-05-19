class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let find = word[i].charCodeAt() - "a".charCodeAt();

            if (curr.children[find] === null) {
                curr.children[find] = new TrieNode();
            }
            curr = curr.children[find];
        }

        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let find = word[i].charCodeAt() - "a".charCodeAt();

            if (curr.children[find] !== null) {
                curr = curr.children[find];
            } else {
                return false;
            }
        }

        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let find = prefix[i].charCodeAt() - "a".charCodeAt();

            if (curr.children[find] !== null) {
                curr = curr.children[find];
            } else {
                return false;
            }
        }

        return true;
    }
}
