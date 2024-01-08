const nums = [1, 2, 3, 4, 5];

function sum(nums) {
  // 递归求解
  function f(i) {
    return i >= nums.length ? 0 : nums[i] + f(i + 1);
  }
  return f(0);
}

console.log(sum(nums)); // 输出15
console.log(sum([])); // 输出15
console.log(sum([1, 2, 3])); // 输出15
