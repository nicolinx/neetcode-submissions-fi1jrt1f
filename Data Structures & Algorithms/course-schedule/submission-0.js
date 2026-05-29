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

        // check cycle
        let dfs = (course) => {
            // THIS IS A CYCLE
            if (inStack[course] == true) return true;

            // ALREADY VISITED
            if (visited[course] == true) return false;

            visited[course] = true;
            inStack[course] = true;

            for (let neighbor of adjList[course]) {
                if (dfs(neighbor) == true) return true;
            }

            // BACKTRACK
            inStack[course] = false;
            return false;
        };

        for (let i = 0; i < numCourses; i++) {
            if (dfs(i) == true) return false;
        }

        return true;
    }
}
