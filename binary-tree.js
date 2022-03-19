/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0
    function shortestPath(node) {
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return minDepth(node.right) + 1
      if (node.right === null) return minDepth(node.left) + 1
      return (
        Math.min(shortestPath(node.left), shortestPath(node.right)) + 1
      )
    }
    return shortestPath(this.root)

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0
    function longestPath(node) {
      
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return minDepth(node.right) + 1
      if (node.right === null) return minDepth(node.left) + 1
      return (
        Math.max(longestPath(node.left), longestPath(node.right)) + 1
      )
    }
    return longestPath(this.root)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0

    function maxSum(node) {
      if(node === null) return 0
      const leftSum = maxSum(node.left)
      const rightSum = maxSum(node.right)
      result = Math.max(result, node.val + leftSum + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    maxSum(this.root)
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null

    //using BFS
    let queue = [this.root]
    let closest = null

    while(queue.length) {
      let currNode = queue.shift()
      let currVal = currNode.val
      let largerThanLowerBound = currVal > lowerBound
      let useClosest = currVal < closest || closest === null

      if(largerThanLowerBound && useClosest) {
        closest = currVal
      }

      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }

    return closest

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
