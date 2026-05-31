class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = Array.from({ length: numCourses }, () => []);

        for (let [a, b] of prerequisites) {
            adjList[b].push(a);
        }

        let visited = Array(numCourses).fill(false);
        let inStack = Array(numCourses).fill(false);

        let checkCycle = (node) => {
            // cycle detected
            if (inStack[node] == true) return true;

            // not cycle, but already visited
            if (visited[node] == true) return false;

            inStack[node] = true;

            for (let neighbor of adjList[node]) {
                if (checkCycle(neighbor) === true) return true;
            }

            // backtrack inStack
            inStack[node] = false;

            // mark as visited
            visited[node] = true;

            return false;
        };

        for (let i = 0; i < numCourses; i++) {
            if (checkCycle(i) == true) return false;
        }

        return true;
    }
}
