let i = 0,
  j = 0;
let results = [];

while (i < A.length && j < B.length) {
  let low = Math.max(A[i][0], B[j][0]);
  let high = Math.max(A[i][1], B[j][1]);

  if (low <= high) {
    results.push([low, high]);
  }

  if (A[i][1] < B[j][1]) {
    i++;
  } else {
    j++;
  }
}

return results;
