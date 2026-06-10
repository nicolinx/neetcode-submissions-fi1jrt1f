class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxStr = "";

        let isPalindrome = (str) => {
            let i = 0;
            let j = str.length - 1;
            while(i<=j){
                if(str[i] != str[j]) return false;

                i++;
                j--;
            }

            return true;
        };

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                let str = s.substring(i, j);
                if(isPalindrome(str) && str.length > maxStr.length){
                    maxStr = str;
                }
            }
        }

        return maxStr;
    }
}
