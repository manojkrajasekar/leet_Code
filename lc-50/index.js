function myPow(x, n) {
  return n > 0 ? getPow(x, n) : 1 / getPow(x, -n);

  function getPow(x, n) {
    let ans = 0;
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return x;
    } else if (n % 2 == 0) {
      ans = getPow(x, n / 2);
      return ans * ans;
    } else {
      ans = getPow(x, (n - 1) / 2);
      return ans * ans * x;
    }
  }
}
