class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let result = [];
        result.push(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            let last = result[result.length - 1];
            if (last[1] >= intervals[i][0]) {
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
