// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
//给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

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
  // 如果p=q，则返回任意一个
  // 如果p和q都小于当前节点，则说明在左侧子树，则root=root.left
  // 同理，如果p和q都大于当前节点，则说明在右子树，则root=root.right
  // 如果p和q在下一步是向左还是向右发生了分歧，则说明p和q要分道扬镳了，说明当前节点就是他们的最近公共祖先了
  if(root === null) {
      return  null
  }
  if(p.val === q.val) {
      return p
  }
  while(root) {
      if(p.val < root.val && q.val < root.val) {
          root = root.left
      }
      else if(p.val > root.val && q.val > root.val) {
          root = root.right
      }
      else {
          return root
      }
  }
};