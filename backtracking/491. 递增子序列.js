/**
 * https://leetcode.cn/problems/increasing-subsequences/
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

输入：nums = [4,4,3,2,1]
输出：[[4,4]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
  let ans = []
  let path = []

  var helper = (startIndex) => {
      // 当path数组长度大于1之后，就push进去，但是不需要return，应该后面还需要继续处理
      if(path.length > 1) {
          ans.push([...path])
      }
      let cache = new Map()
      for(let i=startIndex; i<nums.length;i++) {
          if(cache.has(nums[i]) || nums[i] < path[path.length - 1]) {
              continue
          }
          path.push(nums[i])
          cache.set(nums[i], true)
          helper(i+1)
          path.pop()
      }
  }

  helper(0)

  return ans
};