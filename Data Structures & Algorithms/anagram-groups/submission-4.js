class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let i = 0; i < strs.length ; i++){
            let bucket = Array(26).fill(0);

            for(let char of strs[i]){
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                bucket[index]++;
            }

            let key = bucket.join(' ');
            let arr = (map[key] || []);
            arr.push(i);
            map[key] = arr;
        }

        let result = [];
        for(let v of Object.values(map)){
            result.push(v.map((e) => strs[e]))
        }

        return result
    }

    // groupAnagrams(strs) {
    //     let map = {};

    //     for(let i = 0; i < strs.length ; i++){
    //         let s = strs[i].split('').sort().join('');
            
    //         let arr = map[s] || [];
    //         arr.push(i);
    //         map[s] = arr;
    //     }

    //     let result = [];
    //     for(let [k,v] of Object.entries(map)){
    //         result.push(v.map((e) => strs[e]))
    //     }

    //     return result
    // }
}
