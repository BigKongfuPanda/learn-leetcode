/**
 * https://leetcode.cn/problems/next-greater-element-i/
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  // 1.首先将num1转成map：value --> index
  // 2. 遍历num2，使用单调栈，
  // 2.1 满足游标元素nums2[i]大于栈顶元素nums[top]的时候，则判断栈顶元素是否在map中，求出下标idx, ans[idx]=nums2[i]
  // 2.2 如果游标元素nums2[i]小于或等于栈顶元素nums[top]，则则将游标元素的下标push到栈中

  const map = new Map() // 对num1转换生成映射
  const stack = [] // 单调栈
  const ans = new Array(nums1.length).fill(-1) // 存放结果
  // 1.遍历nums1，生成map
  nums1.forEach((n, idx) => map.set(n, idx))

  // 遍历num2，结合单调栈来求出结果
  for(let i=0; i< nums2.length;i++) {
      if(stack.length === 0 || nums2[i] <= nums2[stack[stack.length - 1]]) {
          stack.push(i)
      } else {
          while(nums2[i] > nums2[stack[stack.length - 1]]) {
              const idx = stack.pop()
              const topEle = nums2[idx]
              if(map.has(topEle)) {
                  ans[map.get(topEle)] = nums2[i]
              }
          }
          stack.push(i)
      }
  }
  return ans
};