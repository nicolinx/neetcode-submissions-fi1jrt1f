class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let dfs = (i, prevEnd) => {
            if (i > intervals.length - 1) return 0;

            let exclude = 1 + dfs(i + 1, prevEnd);

            let include = Infinity;
            if (intervals[i][0] >= prevEnd) {
                include = 0+ dfs(i + 1, intervals[i][1]);
            }

            return Math.min(include, exclude);
        };

        return dfs(0, -Infinity);
    }
}
