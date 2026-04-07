class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        // OUZODYXAZV
        // XYZ

        let target = {};
        for (let c of t) {
            target[c] = (target[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(target).length;

        let window = {};
        let l = 0;

        let minLen = Infinity;
        let res = '';

        for (let r = 0; r < s.length; r++) {
            let char = s[r];
            window[char] = (window[char] || 0) + 1;

            if (window[char] === target[char]) have++;

            while (have === need) {
                let length = r - l + 1;
                if (length < minLen) {
                    minLen = length;
                    res = s.substring(l, r + 1)
                }

                let leftChar = s[l];
                window[leftChar]--;

                if (leftChar in target && window[leftChar] < target[leftChar]) {
                    have--;
                }

                l++;
            }
        }

        return res;
    }
}
