/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 * 
 */



var threeSum = function(nums) {
  let ans = []
  if(!nums || nums.length === 0) {
    return ans
  }
  nums.sort((a,b) => a-b)
  for(let i =0; i< nums.length; i++) {
    if(nums[i] > 0) {
      return ans
    }
    if(i >0 && nums[i] === nums[i-1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      let sum = nums[i]+nums[l]+nums[r]
      if(sum === 0) {
        ans.push([nums[i], nums[l], nums[r]])
        while(nums[l] === nums[l+1]) {
          l++
        }
        while(nums[r] === nums[r-1]) {
          r++
        }

        l++
        r--
      } else if(sum > 0) {
        r--
      } else if(sum < 0) {
        l++
      }
    }
  }

  return  ans
}