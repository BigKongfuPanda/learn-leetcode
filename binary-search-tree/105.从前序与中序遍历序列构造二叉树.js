/*
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  var helper = (i, j, k, l) => {
    let rootValue = preorder[i]
    // 创建根节点
    let root = new TreeNode(rootValue)
    // 找到root在中序遍历的下标位置，用这个下标可以计算左右子树节点数量，从而进行分割
    let m = inorder.indexOf(rootValue)

    if (m > k) {
      // 注意这里的第二个参数，是通过数量算出索引
      root.left = helper(i + 1, i + m - k, k, m - 1)
    }
    if (m < l) {
      // 注意这里的第一个参数，是通过数量算出索引
      root.right = helper(i + m - k + 1, j, m + 1, l)
    }

    return root
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1)
};


/**
 * zhanghaiquan
 * 思路: 参考 https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/jian-dan-gan-jing-de-xie-fa-by-dokomzhu-25oi/
 * 1.先序遍历preOrder的首位是根节点，
 * 2.中序遍历 inOrder 中，以上面找到的根节点为界，左边是左子树，右边是右子树
 * 3.从前到后依次取出（shift）preOrder的节点作为根节点，将其对应的子树从 inOrder 中分离出来，递归
 */

function buildTree (preorder, inorder) {
  // 当preorder和inorder为空的时候，就说明已经到了空节点，已经遍历完了
  if(!preorder.length === 0 || !inorder.length === 0) {
    return nul
  }
  // 创建根节点
  let root = new TreeNode(preorder[0])
  // 在inorder中找到左右子树的分界下标
  let index = inorder.indexOf(preorder.shift())
  // 左右子树进行递归
  root.left = buildTree(preorder, inorder.slice(0, index))
  root.right = buildTree(preorder, inorder.slice(index+1))
  // 返回根节点
  return root
}