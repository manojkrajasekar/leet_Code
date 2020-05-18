function maxSumTwoNoOverlap(A, L, M) {
  let max = -1;
  let prefixSum = new Array(A.length + 1).fill(0);

  for (let index = 1; index < prefixSum.length; index++) {
    prefixSum[index] = prefixSum[index - 1] + A[index - 1];
  }

  console.log("PREFIX SUM", prefixSum);
  for (let index = L; index < prefixSum.length; index++) {
    let Lsum = prefixSum[index] - prefixSum[index - L];

    for (let mIndex = M; mIndex < index - L; mIndex++) {
      let Msum = prefixSum[mIndex] - prefixSum[mIndex - M];

      if (Lsum + Msum > max) {
        max = Lsum + Msum;
      }
    }

    for (let mAfter = index + M; mAfter < prefixSum.length; mAfter++) {
      let MSum = prefixSum[mAfter] - prefixSum[mAfter - M];

      if (Lsum + MSum > max) {
        max = Lsum + Msum;
      }
    }
  }

  return max;
}
