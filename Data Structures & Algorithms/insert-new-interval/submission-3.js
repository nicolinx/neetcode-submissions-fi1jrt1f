class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];

        let i = 0;
        // push all the left side
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

        // push all the right side (the rests)
        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
