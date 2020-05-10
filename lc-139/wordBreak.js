function wordBreak(str, wordDict) {
  let wordSet = new Set(wordDict);
  let wordMap = new Map();
  return traverse(wordMap, str, wordSet);
}

function traverse(wordMap, str, wordSet) {
  if (wordMap.has(str)) return wordMap.get(str);

  if (wordSet.has(str)) {
    return true;
  }

  for (let index = 0; index < str.length; index++) {
    let word = str.substring(0, index + 1);

    if (wordSet.has(word)) {
      if (traverse(wordMap, str.slice(index + 1), wordSet)) {
        wordMap.set(str, true);
        return true;
      }
    }
  }

  wordMap.set(str, false);
  return false;
}
