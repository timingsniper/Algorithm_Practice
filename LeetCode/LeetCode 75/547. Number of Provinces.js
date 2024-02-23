/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let ans = 0;
    let visited = Array(isConnected.length);

    const dfs = (node) => {
        visited[node] = true;
        for (let i = 0; i < isConnected.length; i++) {
            if (isConnected[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    };
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            ans++;
            dfs(i);
        }
    }
    return ans;
};
