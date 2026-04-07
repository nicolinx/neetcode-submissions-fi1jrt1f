class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for (let s of strs) {
            res += s.length + '#' + s;
        }

        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // console.log('5#Hello5#World'.substring(2, 5))

        let res = [];

        let temp = '';
        let i = 0;

        while (i < str.length) {
            let s = str[i];

            if (s != '#') {
                temp += s;
                i++;
            } else {
                let num = Number(temp);
                res.push(str.substring(i += 1, i += num));
                temp = '';
            }
        }

        return res;
    }
}
