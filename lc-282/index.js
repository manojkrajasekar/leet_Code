let result = [];

addOperators(num, 0, 0, 0, "", target, result);
console.log("result", result);
return result;

function addOperators(num, index, prevNum, currSum, cur, target, result) {
  console.log("curr", prevNum, currSum, cur);
  if (index === num.length && currSum === target) {
    console.log("curr", cur);
    result.push(cur);
    return;
  }

  for (let i = index; i < num.length; i++) {
    let currStr = num.substring(index, i + 1);

    if (currStr.length > 1 && currStr.charAt(0) === 0) {
      break;
    }

    let currNum = parseInt(currStr);

    if (cur.length == 0) {
      console.log("VALS", currNum, currStr);
      addOperators(num, index + 1, currNum, currNum, currStr, target, result);
    } else {
      addOperators(
        num,
        index + 1,
        currNum,
        currSum + currNum,
        cur + "+" + currStr,
        target,
        result
      );

      addOperators(
        num,
        index + 1,
        -currNum,
        currSum - currNum,
        cur + "-" + currStr,
        target,
        result
      );

      addOperators(
        num,
        index + 1,
        prevNum * currNum,
        currSum - prevNum + currNum * prevNum,
        cur + "*" + currStr,
        target,
        result
      );
    }
  }
}
