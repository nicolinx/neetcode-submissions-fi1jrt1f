class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    isComplete(sub, target) {
        let keranjang = {};

        for (let char of sub) {
            keranjang[char] = (keranjang[char] || 0) + 1;
        }

        for (let char in target) {
            if ((keranjang[char] || 0) < target[char]) return false;
        }

        return true;
    }

    minWindow(s, t) {
        let target = {}
        for (let c of t) target[c] = (target[c] || 0) + 1;

        for (let l = 0; l < s.length; l++) {
            if (!(s[l] in target)) continue;

            for (let r = l; r < s.length; r++) {
                let sub = s.substring(l, r + 1);
                console.log(this.isComplete(sub, target));
            }
        }
    }
}
