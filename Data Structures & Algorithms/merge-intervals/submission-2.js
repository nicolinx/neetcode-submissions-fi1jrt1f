class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let result = [];

        let i = 0;
        while (i < intervals.length) {
            if (i === intervals.length - 1) {
                result.push(intervals[i]);
                break;
            }

            let temp = intervals[i];
            while (temp[1] >= intervals[i + 1][0]) {
                temp = [
                    Math.min(temp[0], intervals[i + 1][0]),
                    Math.max(temp[1], intervals[i + 1][1]),
                ];
                i++;
                if (i === intervals.length - 1) break;
            }
            result.push(temp);
            i++;
        }

        return result;
    }
}

// [[1,3], [1,4], [1,5], [6,7]]
