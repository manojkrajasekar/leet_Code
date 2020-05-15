function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let index = 0; index < intervals.length - 1; index++) {
    let A = intervals[index];

    let B = intervals[index + 1];

    if (A[1] >= B[0]) {
      intervals[index] = [Math.min(A[0], B[0]), Math.max(A[1], B[1])];

      intervals.splice(index + 1, 1);
      index--;
    }
  }

  return intervals;
}
