function largestRectangleArea(heights) {
  let stack = [];
  let maxArea = 0,
    area = 0;

  for (let index = 0; index <= heights.length; index++) {
    while (
      stack.length > 0 &&
      (index == heights.length ||
        heights[stack[stack.length - 1]] >= heights[index])
    ) {
      let top = stack.pop();

      if (stack.length === 0) {
        area = heights[top] * index;
      } else {
        area = heights[top] * (index - stack[stack.length - 1] - 1);
      }

      maxArea = Math.max(area, maxArea);
    }

    stack.push(index);
  }
  return maxArea;
}
