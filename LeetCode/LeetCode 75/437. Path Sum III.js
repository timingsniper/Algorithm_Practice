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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let ans = 0;
    let sumMap = {};
    var dfs = (root, pathSum) => {
        if(root === null) {
            return;
        }
        pathSum += root.val;
        if(pathSum === targetSum) ans++;

        if(sumMap[pathSum - targetSum]) ans += sumMap[pathSum - targetSum];

        if(sumMap[pathSum]) sumMap[pathSum]++;
        else sumMap[pathSum] = 1;

        if(root.left) dfs(root.left, pathSum);
        if(root.right) dfs(root.right, pathSum);

        sumMap[pathSum]--;
    }
    dfs(root, 0);
    return ans;
};

