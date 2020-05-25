var maxTurbulenceSize = function (A) {
  if (A.length == 1) return 1;
  let arr = [...A];

  let dp = new Array(arr.length).fill(0);

  dp[0] = 1;
  dp[1] = A[0] == A[1] ? 1 : 2;
  let max = dp[1];
  for (let index = 2; index < arr.length; index++) {
    if (arr[index] < arr[index - 1]) {
      if (arr[index - 2] < arr[index - 1]) {
        dp[index] = dp[index - 1] + 1;
      } else {
        dp[index] = 2;
      }
    } else if (arr[index] > arr[index - 1]) {
      if (arr[index - 2] > arr[index - 1]) {
        dp[index] = dp[index - 1] + 1;
      } else {
        dp[index] = 2;
      }
    } else {
      dp[index] = 1;
    }
    max = Math.max(max, dp[index]);
  }
  return max;
};
