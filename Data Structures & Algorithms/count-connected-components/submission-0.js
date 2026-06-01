class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjList = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        let visited = Array(n).fill(false);

        let dfs = (node) => {
            if (visited[node]) return;

            visited[node] = true;

            console.log("Traverse ", node);

            for (let neighbor of adjList[node]) {
                dfs(neighbor);
            }
        };

        let result = 0;

        for (let i = 0; i < n; i++) {
            if (visited[i] === false) {
                result++;
                dfs(i);
            }
        }

        return result;
    }
}
