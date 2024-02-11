/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowMap = {};
    let colMap = {}
    let ans = 0;
    for(let i = 0; i<grid.length; i++) {
        let eleRow = [];
        let eleCol = [];
        for(let j = 0; j<grid.length; j++){
            eleRow.push(grid[i][j]);
            eleCol.push(grid[j][i]);
        }
        rowMap[eleRow] = (rowMap[eleRow] || 0) + 1;
        colMap[eleCol] = (colMap[eleCol] || 0) + 1;
        eleRow = [];
        eleCol = [];
    }
   
    for (let key in rowMap) {
        if (colMap[key]) {
            ans += rowMap[key] * colMap[key];
        }
    }
    return ans;

};
