function wordBreak(str, wordDict) {
  let wordSet = new Set(wordDict);
  let dp = new Array(str.length + 1).fill(false);

  dp[0] = true;

  for (let len = 1; len <= str.length; len++) {
    for (let i = 0; i < len; i++) {
      if (dp[i] && wordSet.has(str.substring(i, len))) {
        dp[len] = true;
        break;
      }
    }
  }

  return dp[str.length];
}
