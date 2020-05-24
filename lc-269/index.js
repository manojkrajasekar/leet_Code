function alienOrder(words) {
  const adjList = buildGraph(words);
  if (!adjList) {
    return "";
  }

  const indegrees = buildIndegrees(words, adjList);

  const queue = [];
  const ordering = []; // Final result of the topological ordering.

  // Pick all the vertices with in-degree as 0 and add them to the queue.
  for (const [v, degree] of indegrees) {
    if (degree === 0) queue.push(v);
  }

  while (queue.length) {
    const v = queue.shift();

    // Decrement the in-degree of all adjacents vertices of v,
    // and add them to the queue if their indegree is 0.
    if (adjList.has(v)) {
      for (const n of adjList.get(v)) {
        indegrees.set(n, indegrees.get(n) - 1);
        if (indegrees.get(n) === 0) queue.push(n);
      }
    }

    ordering.push(v);
  }

  console.log("ORDER", ordering);
  if (ordering.length !== indegrees.size) {
    // Graph contains a cylce, topological sort is not possible.
    return "";
  }

  return ordering.join("");
}

function buildIndegrees(words, adjList) {
  const indegrees = new Map();

  // Add all initial 0 in-degree of all letters in each word.
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      indegrees.set(words[i][j], 0);
    }
  }

  // Increment the in-degree of the target vertices.
  for (const v of adjList.keys()) {
    for (const neighbor of adjList.get(v)) {
      indegrees.set(neighbor, indegrees.get(neighbor) + 1);
    }
  }
  return indegrees;
}

// Let the current pair of words be w1 and w2.
// 1. One by one compare characters of both words and find the first mismatching characters.
// 2. Create an edge in adjList from mismatching character of w1 to that of w2.
function buildGraph(words) {
  let adjList = new Map();
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    if (w1.length > w2.length && w1.startsWith(w2)) return "";

    let j = 0;
    while (j < Math.min(w1.length, w2.length)) {
      if (w1[j] !== w2[j]) {
        if (!adjList.has(w1[j])) adjList.set(w1[j], new Set());
        adjList.get(w1[j]).add(w2[j]);
        break;
      }
      j++;
    }
  }
  return adjList;
}
