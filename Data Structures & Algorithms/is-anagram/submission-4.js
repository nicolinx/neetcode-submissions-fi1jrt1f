class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            // add s
            map.set(s[i], (map.get(s[i]) || 0) + 1);

            // min t
            map.set(t[i], (map.get(t[i]) || 0) - 1);

            if (map.get(s[i]) === 0) map.delete(s[i]);
            if (map.get(t[i]) === 0) map.delete(t[i]);
        }

        // console.log(map);

        return map.size === 0;
    }
}
