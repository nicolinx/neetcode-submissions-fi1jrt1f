class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];

            let temp = new Array(26).fill(0);
            for (let s of str) {
                let index = s.charCodeAt(0) - 97;
                temp[index]++;
            }

            let find = temp.join(";");
            let list = map.get(find) || [];
            list.push(str);
            map.set(find, list);
        }

        return [...map.values()];
    }
}
