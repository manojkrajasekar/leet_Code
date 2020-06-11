class Solution {
    int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    
    public int maximumMinimumPath(int[][] A) {
        int m = A.length;
        int n = A[0].length;
        boolean[][] visited = new boolean[m][n];

        Queue<int[]> pq = new PriorityQueue<>((a,b) -> b[2] - a[2]);

        // add the value to the priority queue, with max value as the first value
        pq.offer(new int[]{0, 0, A[0][0]});
        
       while (!pq.isEmpty()) {

            int[] cell = pq.poll();
            int row = cell[0];
            int col = cell[1];

            if(row == m-1 && col == n-1) {
                return cell[2];
            }
           
            visited[row][col] = true;

            for(int[] dir: directions) {

                int newR = dir[0] + row;
                int newC = dir[1] + col;

                if(newR < 0 || newR >= m || newC < 0 || newC >= n || visited[newR][newC]) continue;

                pq.offer(new int[] {newR, newC, Math.min(cell[2], A[newR][newC])});
            }
        }

    return -1;
    }
}