class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let memo = {};
        let count = (i) => {
            if (memo[i] !== undefined) return memo[i];

            if (i === s.length) return 1;

            if (s[i] === "0") return 0;

            let res = count(i + 1);

            if (i < s.length - 1) {
                let s2 = s[i] + s[i + 1];
                if (Number(s2) <= 26) {
                    res += count(i + 2);
                }
            }

            memo[i] = res;

            return res;
        };

        return count(0);
    }
}
