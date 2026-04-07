class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return null;

        return strs.join(',,');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str) return [];
        if(str === '') return [''];

        return str.split(',,');
    }
}
