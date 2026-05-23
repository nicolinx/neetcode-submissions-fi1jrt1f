class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        // save the constructed word for returning the result
        this.word = null;
    }
}

class Solution {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++) {
            let find = word[i].charCodeAt() - "a".charCodeAt();

            if (curr.children[find] === null) {
                curr.children[find] = new TrieNode();
            }

            curr = curr.children[find];
        }

        curr.word = word;
    }

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        this.root = new TrieNode();

        for (let word of words) {
            this.insert(word);
        }

        let result = new Set();

        let backtrack = (x, y, node) => {
            if (board[x] === undefined || board[x][y] === undefined || board[x][y] === "#") return;

            let char = board[x][y];
            let find = char.charCodeAt() - "a".charCodeAt();

            if (node.children[find] === null) return;

            let nextNode = node.children[find];

            // vandalism -> prevent re-calculate and infinite loops
            let temp = char;
            board[x][y] = "#";

            if (nextNode.word !== null) {
                result.add(nextNode.word);
            }

            backtrack(x, y + 1, nextNode);
            backtrack(x + 1, y, nextNode);
            backtrack(x, y - 1, nextNode);
            backtrack(x - 1, y, nextNode);

            board[x][y] = temp;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                backtrack(i, j, this.root);
            }
        }

        return Array.from(result);
    }
}
