class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let result = 0;

        let adjList = Array.from({ length: n }, () => []);
        for (let [a, b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        let visited = Array(n).fill(false);
        let dfs = (node) => {
            if (visited[node]) return;

            visited[node] = true;

            for (let neighbor of adjList[node]) {
                dfs(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {
            if (visited[i] === false) {
                result++;
                dfs(i);
            }
        }

        return result;
    }
}
