class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let ans = 0;

        for (let i = 0; i < s.length - 1; i++) {
            let a = s.charCodeAt(i);
            let b = s.charCodeAt(i+1);

            let diff = Math.abs(a-b);
            ans += diff;
        }

        return ans;
    }
}
