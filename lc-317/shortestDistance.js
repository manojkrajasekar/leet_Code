let distances = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
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

function getShortestPath(row, col, grid) {
  let queue = [[row, col]];

  let visited = new Array(grid.length).fill(false);

  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(grid[0].length).fill(false);
  }

  let distance = 0;

  while (queue.length) {
    distance++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift();

      for (let dir of directions) {
        let newRow = dir[0] + row;
        let newCol = dir[1] + col;

        if (!visited[newRow][newCol] && isValid(newRow, newCol)) {
          reachable[newRow][newCol]++;
          distances[newRow][newCol] += distance;
          queue.push([newRow, newCol]);
        }
      }
    }
  }
}

function isValid(row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return false;
  }
}
