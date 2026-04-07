class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let i = 0; i < strs.length ; i++){
            let s = strs[i].split('').sort().join('');
            
            let arr = map[s] || [];
            arr.push(i);
            map[s] = arr;
        }

        let result = [];
        for(let [k,v] of Object.entries(map)){
            result.push(v.map((e) => strs[e]))
        }

        return result
    }
}
