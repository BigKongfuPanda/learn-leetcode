/**
 * https://leetcode.cn/problems/daily-temperatures/
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 输入: temperatures = [73,74,75,71,69,72,76,73] 输出: [1,1,4,2,1,1,0,0]
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  // 1.遍历数组，设置游标l，如果发现temperatures[l]>temperatures[i]，则记录d=l-i，否则d=0
  let ans = []
  for(let i = 0; i < temperatures.length; i++){
      let l = i + 1
      while(l < temperatures.length) {
          if(temperatures[l] <= temperatures[i]) {
              l++
          } else {
              ans.push(l - i)
              break
          }
      }
      if(l === temperatures.length) {
          ans.push(0)
      }
  }
  return ans
};


// 解法2：单调栈
// 解法描述: https://leetcode.cn/problems/daily-temperatures/solution/leetcode-tu-jie-739mei-ri-wen-du-by-misterbooo/
var dailyTemperatures = function(temperatures) {
  // 单调栈
  let len = temperatures.length
  let ans = new Array(len).fill(0)
  let stack = []
  for(let i = 0; i < len; i++) {
      if(stack.length === 0 || temperatures[i] <= temperatures[stack[stack.length-1]]) {
          stack.push(i)
      } else {
          while(temperatures[i] > temperatures[stack[stack.length-1]]) {
              const index = stack.pop()
              ans[index] = i - index
          }
          stack.push(i)
      }
  }
  return ans
}