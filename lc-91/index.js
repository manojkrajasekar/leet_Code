var numDecodings = function (s) {
  if (s.length < 1) return 0;

  let memo = []; // Store the cached results

  function traverse(index) {
    let numWays = 0;

    if (index == s.length) return 1;

    if (memo[index] !== null) return memo[index];

    if (s[index] > 0) {
      numWays += traverse(index + 1);
    }

    if (s[index] != 0 && s[index + 1] != null && s[index] + s[index + 1] < 27) {
      numways += traverse(index + 2);
    }

    memo[index] = numWays;

    return numWays;
  }

  return traverse(0);
};
