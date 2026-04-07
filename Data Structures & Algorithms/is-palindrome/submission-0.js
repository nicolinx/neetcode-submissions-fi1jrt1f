class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let i = 0;
        let j = s.length - 1;

        while(i<j){
            if(s[i] === ' ') i++;
            if(s[j] === ' ') j--;

            console.log('check', s[i], s[j]);
            if(s[i] !== s[j]) return false;

            i++;
            j--;
        }

        return true;
    }
}
