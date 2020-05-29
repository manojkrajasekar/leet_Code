var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  wordSet.add(beginWord);

  if (!wordSet.has(endWord)) return [];

  let queue = [];
  let visited = new Set();
  const wordMap = new Map();
  const distanceMap = new Map();
  let distance = 0;
  let reached = false;

  queue.push(endWord);
  visited.add(endWord);
  distanceMap.set(endWord, distance);

  while (queue.length > 0) {
    let size = queue.length;
    distance++;

    for (let i = 0; i < size; i++) {
      let currWord = queue.shift();
      // console.log('word list', constructAdjList(currWord, wordSet))
      for (let word of constructAdjList(currWord, wordSet)) {
        if (!wordMap.has(word)) wordMap.set(word, []);
        wordMap.get(word).push(currWord);

        if (visited.has(word)) continue;

        if (word == beginWord) {
          reached = true;
        }

        distanceMap.set(word, distance);
        queue.push(word);
        visited.add(word);
      }
    }
  }

  if (!reached) {
    return [];
  }

  let result = [];
  traverse(result, [beginWord], beginWord, endWord, wordMap, distanceMap);
  return result;

  function traverse(result, tempPath, word, endWord, wordMap, distanceMap) {
    if (word === endWord) {
      result.push([...tempPath]);
      return;
    }

    const neighbors = wordMap.get(word);

    if (neighbors !== undefined) {
      for (let neigh of neighbors) {
        if (distanceMap.get(neigh) + 1 === distanceMap.get(word)) {
          tempPath.push(neigh);
          traverse(result, tempPath, neigh, endWord, wordMap, distanceMap);
          tempPath.pop();
        }
      }
    }
  }

  function constructAdjList(word, wordSet) {
    const result = [];

    for (let index = 0; index < word.length; index++) {
      let currentCode = word.charCodeAt(index);

      for (let c = 97; c <= 122; c++) {
        if (c !== currentCode) {
          const chars = word.split("");
          chars[index] = String.fromCharCode(c);
          let newWord = chars.join("");
          if (wordSet.has(newWord)) {
            result.push(newWord);
          }
        }
      }
    }
    return result;
  }
};
