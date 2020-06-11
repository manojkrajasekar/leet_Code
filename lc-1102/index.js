function maximumMinPath(A) {
  return traverse(0, 0, A[0][0]);

  function isValid(row, col) {
    return row >= 0 && col >= 0 && row < A.length && col < A[0].length;
  }

  function traverse(row, col, curr) {
    if (row == A.length - 1 && col == A[0].length - 1) {
      return curr;
    }

    if (!isValid(row, col)) continue;

    return Math.max(
      traverse(row + 1, col, Math.min(A[row + 1][col], A[row][col])),
      traverse(row, col + 1, Math.min(A[row][col + 1], A[row][col])),
      traverse(row - 1, col + 1, Math.min(A[row - 1][col], A[row][col])),
      traverse(row, col - 1, Math.min(A[row][col - 1], A[row][col]))
    );
  }
}
