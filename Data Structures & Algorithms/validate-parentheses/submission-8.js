class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let c of s) {
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c);
            } else {
                if (
                    (c === ")" && stack.pop() !== "(") ||
                    (c === "}" && stack.pop() !== "{") ||
                    (c === "]" && stack.pop() !== "[")
                )
                    return false;
            }
        }

        return stack.length === 0;
    }
}
