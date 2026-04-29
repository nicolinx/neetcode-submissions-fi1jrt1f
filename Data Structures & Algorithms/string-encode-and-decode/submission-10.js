class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for (let i = 0; i < strs.length; i++) {
            encode += strs[i].length + "#" + strs[i];
        }

        console.log(encode);
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // console.log("decode", str);

        let decode = [];

        let i = 0;
        let temp = "";
        while (i < str.length) {
            let s = str[i];
            // console.log("\n");
            // console.log("i =", i);
            // console.log("temp =", temp);

            if (s === "#") {
                let num = parseInt(temp);
                decode.push(str.slice((i += 1), (i += num)));
                temp = "";
            } else {
                temp += s;
                i++;
            }

            // console.log("new temp =", temp, "decode", decode);
        }

        return decode;
    }
}
