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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let ans = [];
    let bfs = (node, level) => {
        if (level === ans.length) ans.push(node.val);
        if (node.right !== null) bfs(node.right, level + 1);
        if (node.left !== null) bfs(node.left, level + 1);
    }
    if (root === null) return ans;
    bfs(root, 0);
    return ans;
};
