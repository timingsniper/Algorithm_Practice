/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let seqOne = [];
    let seqTwo = [];
    getSequence(root1, seqOne);
    getSequence(root2, seqTwo);
   
    return (seqOne.length === seqTwo.length && seqOne.every((ele, i) => ele === seqTwo[i]));

};

/**
 * @param {TreeNode} root
 */
var getSequence = (root, leaves) => {
    if(root !== null) {
        if(root.left === null && root.right === null) {
            leaves.push(root.val);
        }
        getSequence(root.left, leaves);
        getSequence(root.right, leaves);
    }
}
