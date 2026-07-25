class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);

        let removeCount = 0;
        let prevEnd = -Infinity;

        for (let i = 0; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) {
                removeCount++;
            } else {
                prevEnd = intervals[i][1];
            }
        }

        return removeCount;
    }
}
