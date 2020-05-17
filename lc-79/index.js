function exist(board, word) {
  let rowLen = board.length;
  let colLen = board[0].length;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (traverse(board, word, i, j)) return true;
    }
  }

  return false;

  function traverse(board, word, row, col) {
    if (!word.length) return true;
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[0]
    ) {
      return false;
    }

    const character = board[row][col];

    board[row][col] = 0;
    const result =
      traverse(board, word.slice(1), row + 1, col) ||
      traverse(board, word.slice(1), row - 1, col) ||
      traverse(board, word.slice(1), row, col + 1) ||
      traverse(board, word.slice(1), row, col - 1);

    board[row][col] = character;

    return result;
  }
}
