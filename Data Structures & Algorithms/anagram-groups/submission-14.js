class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0);

            let str = strs[i];
            for (let c of str) {
                count[c.charCodeAt() - "a".charCodeAt()] += 1;
            }
            let key = count.join(';');

            let item = map[key] || [];
            item.push(str);
            map[key] = item;
        }

        return Object.values(map);
    }
}
