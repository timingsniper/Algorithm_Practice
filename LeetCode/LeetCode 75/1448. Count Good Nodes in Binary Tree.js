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
var goodNodes = function (root) {
    let ans = 0;
    var dfs = function (node, maxSoFar) {
        if (maxSoFar <= node.val) {
            ans++;
        }
        if (node.right !== null) {
            dfs(node.right, Math.max(node.val, maxSoFar));
        }
        if (node.left !== null) {
            dfs(node.left, Math.max(node.val, maxSoFar));
        }

    }
    dfs(root, -999999);
    return ans;
};
