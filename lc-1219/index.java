class Solution {
    public int getMaximumGold(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int goldMax = 0;

        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(grid[i][j] > 0) {
                   int gold =  traverse(grid, i, j, m, n, new boolean[m][n]);
                   goldMax = Math.max(goldMax, gold);
                }
            }
        }

        return goldMax;
        
    }

        private int traverse(int[][] grid, int row, int col, int m, int n,  boolean[][] visited) {


            if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0 || visited[row][col] == true) {
                return 0;
            }

            visited[row][col] = true;

            int left = traverse(grid, row, col - 1, m, n,  visited);
            int right = traverse(grid, row, col + 1,  m, n, visited);
            int top = traverse(grid, row - 1, col,  m, n, visited);
            int down = traverse(grid, row + 1, col,  m, n, visited);

            int currMax = Math.max(left, Math.max(right, Math.max(top, down)));

            visited[row][col] = false;

            return currMax + grid[row][col];
        }
    
}