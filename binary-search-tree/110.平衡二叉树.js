/*
https://leetcode-cn.com/problems/balanced-binary-tree/
*/
//
var isBalanced = function (root) {
  let isBST = (node) => {
    if (node == null) return 0;
    let leftHeight = isBST(node.left);
    let rightHeight = isBST(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return isBST(root) !== -1;
};

// 参考答案：https://leetcode.cn/problems/balanced-binary-tree/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-x3bv/
/**
 * 
 * 本题思路
递归
此时大家应该明白了既然要求比较高度，必然是要后序遍历。

递归三步曲分析：

明确递归函数的参数和返回值
参数的话为传入的节点指针，就没有其他参数需要传递了，返回值要返回传入节点为根节点树的深度。

那么如何标记左右子树是否差值大于1呢。

如果当前传入节点为根节点的二叉树已经不是二叉平衡树了，还返回高度的话就没有意义了。

所以如果已经不是二叉平衡树了，可以返回-1 来标记已经不符合平衡树的规则了。

代码如下：


// -1 表示已经不是平衡二叉树了，否则返回值是以该节点为根节点树的高度
int getDepth(TreeNode* node)
明确终止条件
递归的过程中依然是遇到空节点了为终止，返回0，表示当前节点为根节点的树高度为0

代码如下：


if (node == NULL) {
    return 0;
}
明确单层递归的逻辑
如何判断当前传入节点为根节点的二叉树是否是平衡二叉树呢，当然是左子树高度和右子树高度相差。

分别求出左右子树的高度，然后如果差值小于等于1，则返回当前二叉树的高度，否则则返回-1，表示已经不是二叉树了。

代码如下：


int leftDepth = depth(node->left); // 左
if (leftDepth == -1) return -1;
int rightDepth = depth(node->right); // 右
if (rightDepth == -1) return -1;

int result;
if (abs(leftDepth - rightDepth) > 1) {  // 中
    result = -1;
} else {
    result = 1 + max(leftDepth, rightDepth); // 以当前节点为根节点的最大高度
}

return result;
代码精简之后如下：


int leftDepth = getDepth(node->left);
if (leftDepth == -1) return -1;
int rightDepth = getDepth(node->right);
if (rightDepth == -1) return -1;
return abs(leftDepth - rightDepth) > 1 ? -1 : 1 + max(leftDepth, rightDepth);
此时递归的函数就已经写出来了，这个递归的函数传入节点指针，返回以该节点为根节点的二叉树的高度，如果不是二叉平衡树，则返回-1。
 * 
 */
var isBalanced = function (root) {
  //还是用递归三部曲  + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1。用-1表示不是平衡二叉树
  // 1. 确定递归函数参数以及返回值
  const getDepth = function (node) {
    // 2. 确定递归函数终止条件
    if (node === null) {
      // 说明当前节点为空，深度为0
      return 0;
    }
    // 3. 确定单层递归逻辑
    let leftDepth = getDepth(node.left); //左子树高度
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth = getDepth(node.right); //右子树高度
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      // 以当前节点为根节点的最大高度
      return 1 + Math.max(leftDepth, rightDepth);
    }
  };
  return getDepth(root) === -1 ? false : true;
};
