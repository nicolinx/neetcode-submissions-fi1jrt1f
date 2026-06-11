class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxStr = "";

        let isPalindrome = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            return s.substring(l + 1, r);
        };

        for (let i = 0; i < s.length; i++) {
            let odd = isPalindrome(i, i);
            if (odd.length > maxStr.length) maxStr = odd;

            let even = isPalindrome(i, i + 1);
            if (even.length > maxStr.length) maxStr = even;
        }

        return maxStr;
    }
}
