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
var successor = function(root) {
    root = root.right;
    while(root.left !== null) root = root.left;
    return root.val;
}

 /**
 * @param {TreeNode} root
 * @return {number}
 */
var predecessor = function(root) {
    root = root.left;
    while(root.right !== null) root = root.right;
    return root.val;
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root === null) return null;

    if(key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // Delete from right subtree
    else if(key<root.val) {
        root.left = deleteNode(root.left, key);
    }

    // Delete current node
    else {
        // node is a leaf
        if(root.left === null && root.right === null) {
            root = null;
        }
        // not a leaft, has right child
        else if(root.right !== null) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        }
        else{
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};
