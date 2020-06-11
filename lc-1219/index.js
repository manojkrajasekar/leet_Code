function getMaximumGold(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; k < grid[0].length; j++) {
      if (grid[i][j] !== 0) {
        traverse(i, j, grid[i][j], grid[i][j]);
      }
    }
  }

  function isValid(grid, row, col) {
    return;
  }

  let newMax = 0;

  function traverse(row, col, val, sum) {
    if (isValid(grid, newR, newC)) {
      return;
    }

    visited[row][col] = true;

    for (let dir of directions) {
      let newR = dir[0] + row;
      let newC = dir[1] + col;

      if (isValid(grid, newR, newC)) {
        if (grid[newR][newC] > max) {
          nextMax = [newR, newC];
        }
        nextMax = Math.max(nextMax, grid[newR][newC]);
      }
    } // this will get the max of all the surrounding values from the grid

    traverse(newR, newC, grid, (sum += grid[newR][newC]));

    tot = Math.max(tot, sum);

    return sum;

    // as this is the end, reset the 2d boolean array to its original value
  }
}
