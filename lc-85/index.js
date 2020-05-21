function maximalReactangle(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  let left = new Array(colLen).fill(0);
  let right = new Array(colLen).fill(0);
  let height = new Array(colLen).fill(0);

  console.log("LEFT", height);

  let maxVal = 0;

  for (let index = 0; index < rowLen; index++) {
    let curr_left = 0,
      curr_right = colLen;

    for (let colIndex = 0; colIndex < colLen; colIndex++) {
      if (matrix[index][colIndex] == "1") {
        height[colIndex]++;
      } else {
        height[colIndex] = 0;
      }
    }

    for (let j = 0; j < colLen; j++) {
      if (matrix[index][j] == "1") {
        left[j] = Math.max(left[j], curr_left);
      } else {
        left[j] = 0;
        curr_left = j + 1;
      }
    }

    for (let j = colLen - 1; j >= 0; j--) {
      if (matrix[index][j] == "1") {
        right[j] = Math.min(right[j], curr_right);
      } else {
        right[j] = colLen;
        curr_right = j;
      }
      // console.log("MAX VALUE", right[j], j);
    }

    for (let j = 0; j < colLen; j++) {
      maxVal = Math.max(maxVal, height[j] * (right[j] - left[j]));
    }
    console.log("MAX VAL", maxVal, height, right, left);
  }

  return maxVal;
}
