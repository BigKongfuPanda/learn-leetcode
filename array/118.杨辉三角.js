/*
数学
https://leetcode-cn.com/problems/pascals-triangle/
*/

// 个人解法 时间O(n^2) 空间O(n)
var generate = function (numRows) {
  if (numRows <= 0) return [];
  let ans = [];
  let prev = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      ans.push([1]);
      continue;
    }

    let j = 0;
    let arr = [];
    while (j + 1 < prev.length) {
      arr.push(prev[j] + prev[j + 1])
      j++;
    }
    arr = [1].concat(arr, [1]);
    ans.push(arr);
    prev = arr;
  }

  return ans;
};

// 官方解法
var generate = function (numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1).fill(1);

    // row[j] = prevRow[j - 1] + prevRow[j]
    for (let j = 1; j < i; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }

    ans.push(row);
  }

  return ans;
};

// zhanghaiquan
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  // 每行的元素个数等于该行的行数
  // 每个元素i等于上一行的i-1和i之和
  
  if(numRows === 1) {
      return [[1]]
  }
  if(numRows === 2) {
      return [[1], [1,1]]
  }

  const result = [[1],[1,1]]

  // 打印行
  for(let i = 3; i<=numRows; i++) {
      let tmp = []
      // 打印列
      for(let j = 0; j < i; j++) {
          if(j === 0 || j === i -1) {
              tmp.push(1)
          } else {
              const lastOne = result[result.length-1]
              tmp.push(lastOne[j-1]+lastOne[j])
          }
      }
      result.push(tmp)
  }

  return result
};