/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let sum = 0
    let l = 0
    let r = 0
    let ans = nums.length + 1
    while(l <= r && r < nums.length) {
      sum += nums[r]
      r++
      while(sum >= target) {
        ans = Math.min(ans, r - l)
        sum -= nums[l]
        l++
      }
    }
    return ans > nums.length ? 0 : ans
};