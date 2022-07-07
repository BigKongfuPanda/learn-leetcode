/**
 * https://leetcode.cn/problems/combinations/
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。你可以按 任何顺序 返回答案。
 * 输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

输入：n = 1, k = 1
输出：[[1]]
 * 
 */

// 参考教程解法视频：https://www.bilibili.com/video/BV1ti4y1L7cv?vd_source=64fa0053c79a9413658d3ee3f01522fd

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ans = [];
  let path = [];

  var helper = (n, k, startIndex) => {
    if (path.length === k) {
      ans.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      helper(n, k, i + 1);
      path.pop();
    }
  };

  helper(n, k, 1);

  return ans;
};
