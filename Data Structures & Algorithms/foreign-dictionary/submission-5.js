class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let nodes = [];

        for (let i = 0; i < words.length - 1; i++) {
            let a = words[i];
            let b = words[i + 1];

            let p = 0;
            let found = false;

            while (p < a.length && p < b.length) {
                if (a[p] != b[p]) {
                    nodes.push([a[p], b[p]]);
                    found = true;
                    break;
                }

                p++;
            }

            if (!found && a.length > b.length) return "";
        }

        let adjList = {};

        for (let word of words) {
            for (let char of word) {
                adjList[char] = [];
            }
        }

        for (let [a, b] of nodes) {
            adjList[a].push(b);
        }

        let visited = {};
        let inStack = {};

        // For topological sort
        let stack = [];

        // Check cycle
        let dfs = (node) => {
            // Cycle found
            if (inStack[node] === true) return true;

            // Already check and it's safe
            if (visited[node]) return false;

            inStack[node] = true;

            for (let neighbor of adjList[node]) {
                if (dfs(neighbor) === true) return true;
            }

            inStack[node] = false;
            stack.push(node);
            visited[node] = true;
        };

        let allLetters = Object.keys(adjList);

        for (let letter of allLetters) {
            if (visited[letter] !== true) {
                if (dfs(letter) === true) return "";
            }
        }

        return stack.reverse().join("");
    }
}
