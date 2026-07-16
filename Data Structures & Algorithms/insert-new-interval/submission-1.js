class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];

        let i = 0;
        // input all the lefts
        while (i < intervals.length) {
            if (intervals[i][1] < newInterval[0]) {
                result.push(intervals[i]);
                i++;
            } else {
                break;
            }
        }

        // handle overlapped
        while (i < intervals.length) {
            if (intervals[i][0] <= newInterval[1]) {
                newInterval = [
                    Math.min(intervals[i][0], newInterval[0]),
                    Math.max(intervals[i][1], newInterval[1]),
                ];
                i++;
            } else {
                break;
            }
        }
        result.push(newInterval);

        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
