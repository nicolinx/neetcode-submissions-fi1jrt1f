class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
        let dfs = (node, index) => {
            if (index === word.length) {
                return node.isEndOfWord;
            }

            let char = word[index];

            if (char !== ".") {
                let find = char.charCodeAt() - "a".charCodeAt();

                if (node.children[find] === null) return false;

                return dfs(node.children[find], index + 1);
            } else {
                for (let i = 0; i < 26; i++) {
                    let child = node.children[i];
                    if (child !== null) {
                        if (dfs(child, index + 1)) return true;
                    }
                }

                return false;
            }
        };

        return dfs(this.root, 0);
    }
}
