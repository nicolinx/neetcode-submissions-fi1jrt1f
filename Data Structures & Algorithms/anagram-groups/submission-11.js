class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let i = 0; i < strs.length; i++) {
            let s = strs[i].split("").sort().join("");
            let curr = map[s] || [];
            curr.push(strs[i]);
            map[s] = curr;
        }

        return Object.values(map);
    }
}
