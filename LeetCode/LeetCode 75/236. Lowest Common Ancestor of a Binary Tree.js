/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;
    let recurseTree = (node, p, q) => {
        // Reached end of a branch
        if(node === null) return false;
        
        // Left, right recursion
        let left = recurseTree(node.left, p, q) ? 1 : 0;
        let right = recurseTree(node.right, p, q) ? 1 : 0;

        // Current node is p or q
        let mid = (node === p || node === q) ? 1 : 0;

        // Any two of left, right or mid is true -> means LCA was found
        if(left + right + mid >= 2) ans = node;

        return (mid + left + right > 0);
    }
    recurseTree(root, p, q);
    return ans;
};
