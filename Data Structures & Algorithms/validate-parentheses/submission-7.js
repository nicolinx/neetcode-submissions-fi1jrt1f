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
                console.log(stack);
                let pop = stack.pop();

                if (
                    (c === ")" && pop !== "(") ||
                    (c === "}" && pop !== "{") ||
                    (c === "]" && pop !== "[")
                )
                    return false;
            }
        }

        return stack.length === 0;
    }
}
