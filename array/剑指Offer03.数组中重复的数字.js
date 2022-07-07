// 备忘录
// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间 O(n) 空间O(n)
var findRepeatNumber = function (nums) {
  let s = new Set;
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      return nums[i];
    }
    s.add(nums[i]);
  }
};

// 时间 O(n) 空间O(1)
// 交换排序
var findRepeatNumber = function (nums) {
  if (nums.length < 1) return false;
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i]) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      let tar = nums[i];
      [nums[i], nums[tar]] = [nums[tar], nums[i]];
    }
  }
};

/** zhanghaiquan
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function (nums) {
  // 用交换法，可以打到时间复杂度O(n)，空间复杂度O(1)
  // 思路.将nums[i]=i，如果后面存在nums[nums[i]] = nums[i]，则说明是重复的，直接返回nums[i]
  // 1.遍历数组
  let i = 0;
  while (i < nums.length) {
    // 如果nums[i]=i则，继续下一轮遍历
    if (nums[i] === i) {
      i++;
      continue;
    }
    // 如果nums[nums[i]] === nums[i]，则说明有重复的，则返回nums[i]
    if (nums[nums[i]] === nums[i]) {
      return nums[i];
    }
    // 将下标和对应的数值进行交换
    const tmp = nums[i];
    nums[i] = nums[tmp];
    nums[tmp] = tmp;

    console.log(i, nums);
  }
};