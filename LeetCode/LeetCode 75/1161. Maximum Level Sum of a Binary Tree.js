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
var maxLevelSum = function(root) {
    if(root === null) return 0;
    let maxSum = -Infinity;
    let curLevel = 0;
    let maxLevel = 0;
    let queue = [root];
    
    while(queue.length) {
        curLevel++;
        let curLevelSum = 0;
        let levelSize = queue.length;
        for(let i= 0; i<levelSize; i++) {
            let curNode = queue.shift();
            curLevelSum += curNode.val;
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);
        }
        if(curLevelSum > maxSum) {
            maxSum = curLevelSum;
            maxLevel = curLevel;
        }

    }
    return maxLevel;
};
