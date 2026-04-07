class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let i = 0; i < s.length; i++) {
            let c = s[i];

            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            }
            else {
                if (i === 0) return false;
                let bf = stack.pop();

                if (map[c] !== bf) return false;
            }
        }

        if(stack.length !== 0) return false;
        return true;
    }
}
