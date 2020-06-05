function findTargetSumWays(nums, s) {
  if (nums.length === 0 || nums === undefined) return 1;

  if (S === null) return null;

  return countWays(nums, 0, 0, new Map());

  function countWays(nums, index, sum, cache) {
    let key = index + "," + sum;

    if (cache.get(key)) return cache.get(key);

    if (index === nums.length) {
      return sum === S ? 1 : 0;
    }

    let totWays =
      countWays(nums, index + 1, sum + nums[index], cache) +
      countWays(nums, index + 1, sum - nums[index], cache);

    cache.set(index + "," + sum, totWays);

    return totWays;
  }
}
