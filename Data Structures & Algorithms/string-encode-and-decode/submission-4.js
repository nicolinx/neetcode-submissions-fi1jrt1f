class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return 'strs.length === 0';

        return strs.join(',,');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === 'strs.length === 0') return [];

        return str.split(',,');
    }
}
