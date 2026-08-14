class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        const isAlphanumeric = (str) => /^[a-z0-9]+$/i.test(str);

        while (i < j) {
            if (!isAlphanumeric(s[i])) {
                i++;
                continue;
            }
            if (!isAlphanumeric(s[j])) {
                j--;
                continue;
            }

            console.log(s[i], s[j]);

            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;


            i++;
            j--;
        }

        return true;
    }
}
