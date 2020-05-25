function nextGreaterElement(nums1, nums2) {
  let numMap = new Map();
  let stack = [];
  let results = new Array(nums1.length).fill(0);

  for (let index = 0; index < nums2.length; index++) {
    let num = nums2[index];

    while (stack.length > 0 && stack[stack.length - 1] < num) {
      numMap.set(stack.pop(), num);
    }

    stack.push(num);
  }

  while (stack.length) {
    numMap.set(stack.pop(), -1);
  }

  for (let index = 0; index < nums1.length; index++) {
    let num = nums1[index];
    results[index] = numMap.get(num);
  }

  return results;
}
