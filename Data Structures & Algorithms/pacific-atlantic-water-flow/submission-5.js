class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pasific = Array.from({ length: heights.length }, () =>
            Array(heights[0].length).fill(null),
        );
        let atlantic = Array.from({ length: heights.length }, () =>
            Array(heights[0].length).fill(null),
        );

        let dfsPasific = (i, j, prevHeight) => {
            if (
                heights[i] === undefined ||
                heights[i][j] === undefined ||
                pasific[i][j] !== null ||
                heights[i][j] < prevHeight
            ) {
                return;
            }

            pasific[i][j] = true;

            dfsPasific(i, j + 1, heights[i][j]);
            dfsPasific(i, j - 1, heights[i][j]);
            dfsPasific(i + 1, j, heights[i][j]);
            dfsPasific(i - 1, j, heights[i][j]);
        };

        for (let i = 0; i < heights.length; i++) {
            dfsPasific(i, 0, 0);
        }
        for (let i = 0; i < heights[0].length; i++) {
            dfsPasific(0, i, 0);
        }

        let dfsAtlantic = (i, j, prevHeight) => {
            if (
                heights[i] === undefined ||
                heights[i][j] === undefined ||
                atlantic[i][j] !== null ||
                heights[i][j] < prevHeight
            ) {
                return;
            }

            atlantic[i][j] = true;

            dfsAtlantic(i, j + 1, heights[i][j]);
            dfsAtlantic(i, j - 1, heights[i][j]);
            dfsAtlantic(i + 1, j, heights[i][j]);
            dfsAtlantic(i - 1, j, heights[i][j]);
        };

        for (let i = 0; i < heights.length; i++) {
            dfsAtlantic(i, heights[0].length - 1, 0);
        }
        for (let i = 0; i < heights[0].length; i++) {
            dfsAtlantic(heights.length - 1, i, 0);
        }

        let results = [];

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[i].length; j++) {
                if (atlantic[i][j] && pasific[i][j]) results.push([i, j]);
            }
        }

        return results;
    }
}
