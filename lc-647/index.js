function countSubstrings(str) {
  let totCount = 0;

  let dp = new Array(str.length).fill(0);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(str.length).fill(0);
  }

  for (let col = 1; col < dp.length; col++) {
    for (let row = 0; row < col; row++) {
      if (col - row == 1 && str[row] === str[col]) {
        dp[row][col] = 1;
        totCount++;
      } else if (str[row] === str[col] && dp[row + 1][col - 1] === 1) {
        dp[row][col] = 1;
        totCount++;
      }
    }
  }

  return totCount;
}
