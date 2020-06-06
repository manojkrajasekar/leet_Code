function maxProfit(prices) {
  let pricesSum = new Array(prices.length).fill(0);

  let totSum = 0;

  for (let index = 1; index < prices.length; index++) {
    if (prices[index] - prices[index - 1] > 0) {
      totSum += prices[index] - prices[index - 1];
    }
  }

  return totSum;
}
