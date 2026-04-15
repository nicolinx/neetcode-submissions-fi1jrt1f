class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = {};

        for(let i = 0; i<s.length; i++){
            // loop ke semua s, lalu tambah 1 ke map
            // loop ke semua s, lalu kurang 1 ke map

            map[s[i]] = (map[s[i]] || 0) + 1;
            map[t[i]] = (map[t[i]] || 0) - 1;
        }
        // loop lagi, cek kalo semua map jumlahnya 0
        for(let [key, value] of Object.entries(map)){
            if(value !== 0) return false
        }

        return true;
    }
}
