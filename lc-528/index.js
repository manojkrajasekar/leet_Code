function solution(w) {
  this.accumSum = new Array(w.length).fill(0);

  this.accumSum[0] = w[0];

  for (let i = 1; i < w.length; i++) {
    this.accumSum[i] = this.accumSum[i - 1] + w[i];
  }
}

solution.prototype.findIndex = function () {
  let end = this.accumSum.length - 1;
  let begin = 0;

  let random = Math.random() * this.accumSum[this.accumSum.length - 1];
  // create an indx, with the max value as the last element in the accumSum value

  // Need to find the range within which it falls
  while (begin < end) {
    let mid = Math.floor(begin + (end - begin) / 2);

    if (this.accumSum[mid] === random) return random;

    if (this.accumSum[mid] > random) {
      end = mid;
    } else {
      begin = mid + 1;
    }
  }

  return begin;
};
