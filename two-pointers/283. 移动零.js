/**
 * https://leetcode.cn/problems/move-zeroes/
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

输入: nums = [0]
输出: [0]
 */

/**
 * 解题思路
 * https://leetcode.cn/problems/move-zeroes/solution/-by-1105389168-gpay/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0; // 记录0的下标
  let fast = 0; // 记录非0的下标
  while (fast < nums.length) {
    if (nums[fast]) {
      if (slow !== fast) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      slow++;
    }
    fast++;
  }
};
