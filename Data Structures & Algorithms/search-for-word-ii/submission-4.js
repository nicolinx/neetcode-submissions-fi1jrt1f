class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
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

        // prevent duplicate results
        let result = new Set();

        for (let word of words) {
            this.insert(word);
        }

        let backtrack = (xIndex, yIndex, node) => {
            if (
                board[xIndex] === undefined ||
                board[xIndex][yIndex] === undefined ||
                board[xIndex][yIndex] === "#"
            ) {
                return;
            }

            let char = board[xIndex][yIndex];
            let find = char.charCodeAt() - "a".charCodeAt();

            if (node.children[find] === null) return;

            let nextNode = node.children[find];

            // Vandalism: prevent loop back or infinite loop
            let temp = char;
            board[xIndex][yIndex] = "#";

            // Don't stop here. Because if we have word "back" and "backend",
            // the code will stop at "back" word only. The "backend" will be missed.
            if (nextNode.word !== null) {
                result.add(nextNode.word);
            }

            backtrack(xIndex, yIndex + 1, nextNode);
            backtrack(xIndex + 1, yIndex, nextNode);
            backtrack(xIndex - 1, yIndex, nextNode);
            backtrack(xIndex, yIndex - 1, nextNode);

            board[xIndex][yIndex] = temp;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                backtrack(i, j, this.root);
            }
        }

        return Array.from(result);
    }
}
