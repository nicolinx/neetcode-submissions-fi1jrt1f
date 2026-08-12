class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let str of strs) {
            res += `${str.length}#${str}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("decode", str);

        let res = [];

        let i = 0;
        while (i < str.length) {
            let bucket = "";

            while (str[i] !== "#") {
                bucket += str[i];
                i++;
            }

            res.push(str.substring(++i, (i += Number(bucket))));
        }

        return res;
    }
}
