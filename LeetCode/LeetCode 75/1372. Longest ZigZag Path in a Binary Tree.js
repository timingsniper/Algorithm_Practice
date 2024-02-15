/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let ans = 0;
    var dfs = (root, isLeft, len) => {
        if (root === null) {
            return;
        }
        ans = Math.max(len, ans);
        if (isLeft) {
            dfs(root.right, false, len+1);
            dfs(root.left, true, 1);
        }
        else {
            dfs(root.left, true, len+1);
            dfs(root.right, false, 1);
        }
    }

    dfs(root, true, 0);
    dfs(root, false, 0);

    return ans;
};
