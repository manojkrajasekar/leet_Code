function findTargetSumWays(nums, s) {
  if (nums.length === 0 || nums === undefined) return 1;

  if (s === null) return null;

  return countWays(nums, 0, 0, new Map());

  function countWays(nums, index, sum, cache) {
    let key = index + "," + sum;

    if (cache.get(key)) return cache.get(key);

    if (index == nums.length - 1) {
      return sum === S ? 1 : 0;
    }

    let addWays = countWays(nums, index + 1, sum + nums[index], cache);
    let minusWays = countWays(nums, index + 1, sum - nums[index], cache);
    let tot = addWays + minusWays;

    cache.set(index + "," + sum, tot);

    return tot;
  }
}
