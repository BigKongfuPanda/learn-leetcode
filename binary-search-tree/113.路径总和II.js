/*
https://leetcode-cn.com/problems/path-sum-ii/
*/
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var isLeafNode = (node) => !node.left && !node.right
var pathSum = function (root, targetSum) {
  let ans = []
  if (root == null) return ans

  let dfs = (node, arr = []) => {
    arr.push(node.val)
    if (isLeafNode(node)) {
      if (targetSum === arr.reduce((a, b) => a + b)) {
        ans.push(arr)
      }
    } else {
      node.left && dfs(node.left, arr.slice())
      node.right && dfs(node.right, arr.slice())
    }
  }

  dfs(root)

  return ans
};

// 优化版，公用一个数组，妙用回溯
var isLeafNode = (node) => !node.left && !node.right
var pathSum = function(root, targetSum) {
  let ans = []
  if (root == null) return ans
  let visitor = []

  let helper = node => {
    // 入栈
    visitor.push(node.val)
    if (isLeafNode(node)) {
      if (visitor.reduce((a, b) => a + b) === targetSum) {
        ans.push(visitor.slice())
      }
    } else {
      node.left && helper(node.left)
      node.right && helper(node.right)
    }
    // 出栈(回溯)
    visitor.pop()
  }

  helper(root)
  return ans
};

// 广度优先遍历
var pathSum = function (root, targetSum) {
  let res = [];
  let map = new Map();
  // 通过底下叶子节点 获得从叶子节点到根节点的路径
  const getPath = (node) => {
    let path = [];
    while (node) {
      path.push(node.val);
      // 向上找它的父节点
      node = map.get(node);
    }
    path.reverse();
    return path;
  };
  const bfs = (root, sum) => {
    // 队列中每一个元素包含 节点  节点及路过路径上的值的和
    let queue = [[root, sum]];
    while (queue.length) {
      let [node, sum] = queue.shift();
      // 如果是叶子节点并且 路径总和已经等于目标值了
      if (node.left == null && node.right == null && sum == targetSum) {
        res.push(getPath(node));
      } else {
        if (node.left) {
          queue.push([node.left, node.left.val + sum]);
          // map里面存的key是子节点  value是父节点   这样方便向上查找路径
          map.set(node.left, node);
        }
        if (node.right) {
          queue.push([node.right, node.right.val + sum]);
          map.set(node.right, node);
        }
      }
    }
  };
  if (root == null) return [];
  // 节点  节点及路过路径上的值的和
  bfs(root, root.val);
  return res;
};