/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = [];
        let end = [];
        for (let item of intervals) {
            start.push(item.start);
            end.push(item.end);
        }

        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);

        // iterations
        let s = 0,
            e = 0,
            room = 0,
            maxRoom = 0;

        while (s < intervals.length) {
            if(start[s] < end[e]){
                room++;
                maxRoom = Math.max(maxRoom, room);

                s++;
            }else{
                room--;
                e++;
            }
        }

        return maxRoom;
    }
}
