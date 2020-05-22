function hasPath(maze, start, destination) {
  let visited = new Array(maze.length).fill(false);

  for (let i = 0; i < maze.length; i++) {
    visited[i] = new Array(maze[0].length).fill(false);
  }

  console.log("visited", visited);
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  return dfs(maze, start[0], start[1], destination, visited);

  function isValid(maze, row, col) {
    return (
      row >= 0 &&
      row < maze.length &&
      col >= 0 &&
      col < maze[0].length &&
      maze[row][col] !== 1
    );
  }

  function dfs(maze, row, col, destination, visited) {
    if (visited[row][col]) return false;

    if (row == destination[0] && col == destination[1]) return true;

    visited[row][col] = true;

    for (let i = 0; i < dirs.length; i++) {
      let d = dirs[i];
      let Nrow = row;
      let Ncol = col;

      while (isValid(maze, Nrow + d[0], Ncol + d[1])) {
        Nrow += d[0];
        Ncol += d[1];
      }
      console.log("NEW R AND C", Nrow, Ncol);
      if (dfs(maze, Nrow, Ncol, destination, visited)) {
        return true;
      }
    }

    return false;
  }
}
