function orangesRotting(grid) {
  let freshOranges = 0;
  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  console.log("Q", queue);

  let tot = 0;

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isValid(row, col) {
    return (
      row >= 0 &&
      col >= 0 &&
      row < grid.length &&
      col < grid[0].length &&
      grid[row][col] === 1
    );
  }

  while (queue.length > 0 && freshOranges) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let orange = queue.shift();

      for (let dir of directions) {
        let newRow = dir[0] + orange[0];
        let newCol = dir[1] + orange[1];

        if (isValid(newRow, newCol)) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          queue.push([newRow, newCol]);
        }
      }
    }

    tot++;
  }

  return freshOranges === 0 ? tot : -1;
}
