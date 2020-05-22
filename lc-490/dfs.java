int[][] dirs = new int[][]{ {-1, 0}, {1, 0}, {0, 1}, {0, -1} };
    
public boolean hasPath(int[][] maze, int[] start, int[] destination) {
    boolean[][] visited = new boolean[maze.length][maze[0].length];
    return dfs(maze, start, destination, visited);
}

private boolean dfs(int[][] maze, int[] p, int[] destination, boolean[][] visited) {
    if (visited[p[0]][p[1]]) {
        return false;
    }
    if (p[0] == destination[0] && p[1] == destination[1]) {
        return true;
    }
    visited[p[0]][p[1]] = true;
    for (int i = 0; i < dirs.length; i++) {
        int[] d = dirs[i];
        int row = p[0];
        int col = p[1];
        while (isValid(maze, row + d[0], col + d[1])) {
            row += d[0];
            col += d[1];
        }
        if (dfs(maze, new int[]{ row, col }, destination, visited)) {
            return true;
        }
    }
    return false;
}

private boolean isValid(int[][] maze, int row, int col) {
    return row >= 0 && row < maze.length && col >= 0 && col < maze[0].length && maze[row][col] != 1;
}