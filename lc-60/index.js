var getPermutation = function (n, k) {
  let curr = [];
  let total = [];

  for (let i = 1; i <= n; i++) {
    total[i - 1] = i;
  }

  getNthSeq(total, 0, curr, 0);

  function getNthSeq(total, index, curr, count) {
    // console.log("NUMBER", total);
    if (count == k) {
      ans = [...n];
      return true;
    }
    if (curr.length === n) {
      count++;
      console.log("current", curr);
      return;
    }

    for (let i = 0; i < total.length; i++) {
      curr.push(total[i]);

      let remaining = total.filter((n) => n !== total[i]);
      getNthSeq(remaining, i, curr, count);
      if (count == k) {
        console.log("new current", curr);
        return curr;
      }
      console.log("current", curr);
      curr.pop();
    }
  }
};
