function combinationSum(candidates, target) {
  let combinations = [],
    currList = [];

  const result = getCombination(0, candidates, target, currList);

  return combinations;

  function getCombination(startIndex, candidates, target, currList) {
    let currSum = currList.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    if (currSum > target) return;

    if (currSum == target) {
      combinations.push(currList.slice());
    }

    for (let index = startIndex; index < candidates.length; index++) {
      let num = candidates[index];

      currList.push(num);
      getCombination(index, candidates, target, currList);
      startIndex++;
      currList.pop();
    }
  }
}
