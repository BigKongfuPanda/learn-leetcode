/**
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
 */

/**
 * 方法1 分别存储正负数的平方结果，然后使用双指针进行排序 时间复杂度 O(n) 空间复杂度 O(n+m)
 * @param {number[]} nums  
 * @return {number[]}
 经过分析发现，正数部分的数值在平方之后，排序不变。负数部分的数值在平方之后，是倒序。
 1.初始化两个数组, res1和res2，分别放正数和负数的平方结果
 2.使用双指针，去遍历res1和res2，将排序的结果放到新数组ans中
 */
var sortedSquares = function (nums) {
  let res1 = []; // 负数
  let res2 = []; // 正数
  let ans = []; // 存放结果
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      res1.unshift(num * num);
    } else {
      res2.push(num * num);
    }
  }
  console.log("res1", res1);
  console.log("res2", res2);
  let j = 0; // 负数数组的下标
  let k = 0; // 正数数组的下标
  while (j < res1.length && k < res2.length) {
    if (res1[j] > res2[k]) {
      ans.push(res2[k]);
      k++;
    } else if (res1[j] === res2[k]) {
      ans.push(res1[j], res2[k]);
      j++;
      k++;
    } else {
      ans.push(res1[j]);
      j++;
    }
  }
  console.log("j", j, res1.length);
  console.log("k", k, res2.length);
  // res1 数组没有遍历完，还存在多余的元素
  if (j < res1.length) {
    ans.push(...res1.slice(j));
  }
  if (k < res2.length) {
    ans.push(...res2.slice(k));
  }
  return ans;
};

/**
 * 方法2
 * @param {number[]} nums
 * @return {number[]}
    使用双指针，left=0，right=length-1，比较结果大小，大的放在右侧
 */
var sortedSquares = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  let left = 0;
  let right = nums.length - 1;
  let ans = [];
  let idx = right;
  while (left <= right) {
    const power_l = nums[left] * nums[left];
    const power_r = nums[right] * nums[right];

    if (power_l < power_r) {
      ans[idx] = power_r;
      right--;
    } else {
      ans[idx] = power_l;
      left++;
    }

    idx--;
  }

  return ans;
};
