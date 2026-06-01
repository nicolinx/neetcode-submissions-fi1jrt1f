class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length != n - 1) return false;

        let adjList = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        let visited = Array(n).fill(false);

        // check cycle
        let dfs = (node, parent) => {
            visited[node] = true;

            for (let neighbor of adjList[node]) {
                if (neighbor === parent) continue;

                if (visited[neighbor] === true) return false;

                if(dfs(neighbor, node) === false) return false;
            }

            return true;
        };

        if(dfs(0, -1) === false) return false;

        return visited.filter(e => e === true).length === n;
    }
}
