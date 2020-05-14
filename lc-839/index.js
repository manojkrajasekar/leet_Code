var numSimilarGroups = function (A) {
  let wordMap = new Map();
  let size = 0;

  buildGraph(A, wordMap);

  let visited = new Set();

  for (const [key, value] of wordMap) {
    if (visited.has(key)) continue;
    traverse(visited, key, wordMap);

    size++;
  }
  return size;
  function traverse(visited, word, wordMap) {
    visited.add(word);

    let neighbors = wordMap.get(word);
    if (!neighbors) return;

    for (let i = 0; i < neighbors.length; i++) {
      if (!visited.has(neighbors[i])) {
        traverse(visited, neighbors[i], wordMap);
      }
    }
  }

  function buildGraph(A, wordMap) {
    for (let s of A) {
      wordMap.set(s, []);
    }

    let n = A.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (isSimilar(A[i], A[j])) {
          wordMap.set(A[i], [...wordMap.get(A[i]), A[j]]);
          wordMap.set(A[j], [...wordMap.get(A[j]), A[i]]);
        }
      }
    }
  }

  function isSimilar(A, B) {
    let diffCount = 0;
    let len = A.length;
    let i = 0;

    while (i < len) {
      if (A.charAt(i) !== B.charAt(i)) {
        diffCount++;
      }
      i++;
    }
    return diffCount == 2;
  }
};
