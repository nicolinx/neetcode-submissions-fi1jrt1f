class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // create adjlist
        let adjList = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        let visited = Array(n).fill(false);

        // cycle validator
        let dfs = (node, parent) => {
            if (visited[node] === true) return true;

            visited[node] = true;

            for (let neighbor of adjList[node]) {
                if (neighbor === parent) continue;

                if (dfs(neighbor, node) === true) return true;
            }

            return false;
        };

        if (dfs(0, -1) === true) return false;

        // Every visited must be true, too verify all nodes have connections/lines
        return visited.filter((e) => e === false).length > 0 === false;
    }
}
