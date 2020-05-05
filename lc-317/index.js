var shortestDistance = function (grid) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let reachable = new Array(grid.length).fill(0);
  for (let i = 0; i < reachable.length; i++) {
    reachable[i] = new Array(grid[0].length).fill(0);
  }

  let distance = new Array(grid.length).fill(0);
  for (let i = 0; i < distance.length; i++) {
    distance[i] = new Array(grid[0].length).fill(0);
  }

  let totalBuildings = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        getShortestPath(i, j, grid);
        totalBuildings++;
      }
    }
  }

  console.log("total buildings", totalBuildings);
  console.log("distance", distance);
  let minDist = Number.MAX_VALUE;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (reachable[i][j] == totalBuildings) {
        minDist = Math.min(distance[i][j], minDist);
      }
    }
  }

  return minDist !== Number.MAX_VALUE ? minDist : -1;

  function getShortestPath(row, col, grid) {
    let queue = [[row, col]];

    let visited = new Array(grid.length).fill(false);

    for (let i = 0; i < visited.length; i++) {
      visited[i] = new Array(grid[0].length).fill(false);
    }

    let d = 0;

    while (queue.length > 0) {
      d++;
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let element = queue.pop();
        // console.log('element', element)

        for (let i = 0; i < directions.length; i++) {
          let rr = element[0] + directions[i][0];
          let cc = element[1] + directions[i][1];

          if (!isValid(rr, cc, grid, visited)) continue;

          visited[rr][cc] = true;
          reachable[rr][cc]++;
          distance[rr][cc] += d;
          queue.push([rr, cc]);
        }
      }
    }
  }

  function isValid(row, col, grid, visited) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return false;
    }
    if (grid[row][col] !== 0) return false;

    if (visited[row][col]) return false;

    return true;
  }
};
